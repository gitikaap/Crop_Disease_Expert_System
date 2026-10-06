from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)


# ==========================================
# LOAD KNOWLEDGE BASE
# ==========================================

with open("rules.json", "r", encoding="utf-8") as file:
    rules = json.load(file)


# ==========================================
# HOME PAGE
# ==========================================

@app.route("/")
def home():
    return render_template("index.html")


# ==========================================
# DIAGNOSIS ENGINE
# ==========================================

@app.route("/diagnose", methods=["POST"])
def diagnose():

    # Get farmer's information
    data = request.get_json()

    print("\n==============================")
    print("FARMER INPUT")
    print("==============================")
    print(data)

    results = []


    # ======================================
    # CHECK EVERY RULE
    # ======================================

    for index, rule in enumerate(rules):

        conditions = rule.get("conditions", {})

        matched_conditions = []
        unmatched_conditions = []

        # Store detailed reasoning
        reasoning = []


        # ==================================
        # CHECK EACH CONDITION
        # ==================================

        for key, expected_value in conditions.items():

            actual_value = data.get(key)


            # --------------------------------
            # CONDITION MATCHED
            # --------------------------------

            if actual_value == expected_value:

                explanation = rule.get(
                    "explanations", {}
                ).get(
                    key,
                    f"{key} matches the rule."
                )


                matched_conditions.append(
                    explanation
                )


                reasoning.append({

                    "condition": key,

                    "expected": expected_value,

                    "actual": actual_value,

                    "matched": True,

                    "explanation": explanation
                })


            # --------------------------------
            # CONDITION DID NOT MATCH
            # --------------------------------

            else:

                unmatched_conditions.append(
                    f"{key} did not match."
                )


                reasoning.append({

                    "condition": key,

                    "expected": expected_value,

                    "actual": actual_value,

                    "matched": False,

                    "explanation":
                        f"{key} did not match."
                })


        # ==================================
        # CALCULATE MATCH SCORE
        # ==================================

        total_conditions = len(
            conditions
        )

        matched_count = len(
            matched_conditions
        )


        if total_conditions > 0:

            confidence = round(

                (
                    matched_count
                    /
                    total_conditions
                )
                * 100

            )

        else:

            confidence = 0


        # ==================================
        # ONLY SHOW REASONABLE MATCHES
        # ==================================

        if confidence >= 50:

            results.append({

                # --------------------------------
                # RULE INFORMATION
                # --------------------------------

                "rule_id":
                    f"R{index + 1}",

                "problem":
                    rule.get(
                        "problem",
                        "Unknown Problem"
                    ),

                "category":
                    rule.get(
                        "category",
                        "Unknown"
                    ),


                # --------------------------------
                # MATCH SCORE
                # --------------------------------

                "confidence":
                    confidence,


                # --------------------------------
                # MATCHED / UNMATCHED
                # --------------------------------

                "matched":
                    matched_conditions,

                "unmatched":
                    unmatched_conditions,


                # --------------------------------
                # DETAILED REASONING
                # --------------------------------

                "reasoning":
                    reasoning,


                # --------------------------------
                # RECOMMENDATIONS
                # --------------------------------

                "treatment":
                    rule.get(
                        "treatment",
                        []
                    ),

                "prevention":
                    rule.get(
                        "prevention",
                        []
                    )

            })


    # ======================================
    # SORT BY BEST MATCH
    # ======================================

    results.sort(

        key=lambda x:
            x["confidence"],

        reverse=True

    )


    # ======================================
    # PRINT REASONING IN TERMINAL
    # ======================================

    print("\n==============================")
    print("DIAGNOSIS")
    print("==============================")


    for result in results[:3]:

        print(
            result["rule_id"],
            "→",
            result["problem"],
            "→",
            result["confidence"],
            "%"
        )


        for step in result["reasoning"]:

            if step["matched"]:

                print(
                    "   ✅",
                    step["condition"],
                    "=",
                    step["actual"]
                )

            else:

                print(
                    "   ❌",
                    step["condition"],
                    "expected",
                    step["expected"],
                    "but got",
                    step["actual"]
                )


    # ======================================
    # SEND RESULT TO FRONTEND
    # ======================================

    return jsonify({

        "results":
            results[:3]

    })


# ==========================================
# START SERVER
# ==========================================

if __name__ == "__main__":

    app.run(
        debug=True
    )