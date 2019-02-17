from main import create_app
import logging

if __name__ == "__main__":
  app = create_app()
  app.run(host=app.config["FLASK_DOMAIN"], port=app.config["FLASK_PORT"])
else:
  logging.basicConfig(app.config["FLASK_DIRECTORY"] + "trace.log", level=logging.DEBUG)