from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
import traceback

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the fine-tuned model and tokenizer
try:
    model_path = "./fine_tuned_model"
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    model = AutoModelForSequenceClassification.from_pretrained(model_path)
    classifier = pipeline("text-classification", model=model, tokenizer=tokenizer)
    print("Model and tokenizer loaded successfully.")
except Exception as e:
    print(f"Error loading model: {str(e)}")
    traceback.print_exc()
    raise

def classify_query(query):
    try:
        result = classifier(query)[0]
        print(f"Classification result for query '{query}':", result)
        
        # Map numeric labels to severity levels
        severity_mapping = {
            "LABEL_0": "Low severity",
            "LABEL_1": "Medium severity",
            "LABEL_2": "High severity"
        }
        
        return severity_mapping.get(result["label"], "Unknown severity")
    except Exception as e:
        print(f"Classification error: {str(e)}")
        traceback.print_exc()
        raise

@app.route('/query', methods=['POST'])
def handle_query():
    try:
        data = request.get_json()
        if not data or 'query' not in data:
            return jsonify({
                "response": "Invalid request: 'query' field is required"
            }), 400
            
        query = data['query'].strip()
        if not query:
            return jsonify({
                "response": "Invalid request: query cannot be empty"
            }), 400

        severity = classify_query(query)
        return jsonify({
            "response": f"Your query is classified as: {severity}."
        })

    except Exception as e:
        print(f"Request handling error: {str(e)}")
        traceback.print_exc()
        return jsonify({
            "response": f"An error occurred: {str(e)}"
        }), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
