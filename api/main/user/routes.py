from flask import Blueprint
from flask import current_app as app
from main.auth import token_required
from main.user.models import User

user_blueprint = Blueprint("user", __name__)

@user_blueprint.route("/", methods=["GET"])
@token_required
def get():
	return User().get()

@user_blueprint.route("/auth/", methods=["GET"])
def getAuth():
	return User().getAuth()

@user_blueprint.route("/login/", methods=["POST"])
def login():
	return User().login()

@user_blueprint.route("/logout/", methods=["GET"])
def logout():
	return User().logout()

@user_blueprint.route("/", methods=["POST"])
def add():
	return User().add()