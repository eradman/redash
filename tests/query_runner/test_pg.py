from unittest import TestCase

from redash.query_runner.pg import _libpq_params, build_schema


class TestParameters(TestCase):
    def test_libpq_params(self):
        configuration = {"libpq_params": "application_name=redash connect_timeout=5"}
        self.assertDictEqual(_libpq_params(configuration), {"application_name": "redash", "connect_timeout": "5"})

    def test_libpq_params_not_permitted(self):
        configuration = {"libpq_params": "password=xyz"}
        self.assertRaises(ValueError, _libpq_params, configuration)


class TestBuildSchema(TestCase):
    def test_handles_dups_between_public_and_other_schemas(self):
        results = {
            "rows": [
                {
                    "table_schema": "public",
                    "table_name": "main.users",
                    "column_name": "id",
                },
                {"table_schema": "main", "table_name": "users", "column_name": "id"},
                {"table_schema": "main", "table_name": "users", "column_name": "name"},
            ]
        }

        schema = {}

        build_schema(results, schema)

        self.assertIn("main.users", schema.keys())
        self.assertListEqual(schema["main.users"]["columns"], ["id", "name"])
        self.assertIn('public."main.users"', schema.keys())
        self.assertListEqual(schema['public."main.users"']["columns"], ["id"])

    def test_build_schema_with_data_types(self):
        results = {
            "rows": [
                {"table_schema": "main", "table_name": "users", "column_name": "id", "data_type": "integer"},
                {"table_schema": "main", "table_name": "users", "column_name": "name", "data_type": "varchar"},
            ]
        }

        schema = {}

        build_schema(results, schema)

        self.assertListEqual(
            schema["main.users"]["columns"], [{"name": "id", "type": "integer"}, {"name": "name", "type": "varchar"}]
        )
