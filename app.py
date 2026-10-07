from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/lunch", methods=["GET", "POST"])
def lunch():
    if request.method == "POST":
        date = request.form.get("date")
        time = request.form.get("time")
        place = request.form.get("place")

        return render_template(
            "lunch.html",
            confirmed=True,
            date=date,
            time=time,
            place=place
        )

    return render_template("lunch.html", confirmed=False)


if __name__ == "__main__":
    app.run(debug=True)