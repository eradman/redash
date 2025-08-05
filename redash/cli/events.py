import datetime
import json
import logging

import click
from flask.cli import AppGroup
from sqlalchemy import cast, func

from redash.models import Dashboard, Event
from redash.models.base import db

logging.getLogger("xmlschema").setLevel(logging.WARNING)


manager = AppGroup(help="Show event infos")


def _validate_days_range(ctx, param, value):
    if value is None:
        days_ago = ctx.params.get("days_ago")
        return days_ago
    return value


@manager.command(name="count", help="List event counts from a range of whole days")
@click.option(
    "--days-ago", type=int, default=1, help="Start counting given number of days ago. Yesterday is the default."
)
@click.option(
    "--days-range",
    type=int,
    default=None,
    callback=_validate_days_range,
    help="Take given number of days into account. Up until yesterday is the default.",
)
def list_events(days_ago, days_range):
    if days_range > days_ago:
        raise click.BadParameter("days_range should not exceed days_ago")

    start_date = datetime.date.today() - datetime.timedelta(days=days_ago)
    end_date = start_date + datetime.timedelta(days=days_range)

    dashboard_event_counts = (
        db.session.query(Dashboard.name, func.count())
        .select_from(Event)
        .join(Dashboard, Dashboard.id == cast(Event.object_id, db.Integer))
        .filter(
            Event.object_type == "dashboard",
            Event.action == "view",
            Event.created_at >= start_date,
            Event.created_at < end_date,
        )
        .group_by(Dashboard.name)
        .all()
    )

    print(json.dumps({"dashboard_view_count": {k: v for k, v in dashboard_event_counts}}))
