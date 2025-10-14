# LLM Engineering Practice Project

A hands-on project for learning LLM engineering best practices and development workflows. This project includes both Python and JavaScript implementations of various AI/LLM applications and experiments.

## Quick Navigation

- [Python Setup Instructions](#python-setup-instructions)
- [JavaScript Setup Instructions](#javascriptnodejs-setup-instructions)

## Project Structure

- `py/` - Python implementations using Jupyter notebooks
- `js/` - JavaScript/Node.js implementations

## Python Setup Instructions

### 1. Install UV

UV is a fast Python package installer and resolver. Install it with:

```bash
# macOS and Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell)
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Or with pip (slower)
pip install uv
```

### 2. Create and Activate Python Environment

```bash
# Navigate to the project root directory
cd /path/to/llm_engineering_practice

# Create environment
uv sync

# Activate environment
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### 3. Set Up Environment Variables for Python

Create a `.env` file in the `py/` directory with your API key:

```bash
# Unix/Linux/macOS
echo "OPENAI_API_KEY=your_api_key_here" > py/.env

# Windows (PowerShell)
echo "OPENAI_API_KEY=your_api_key_here" | Out-File -FilePath py/.env -Encoding UTF8
```

### 4. Launch Python Development Environment

```bash
# Navigate to the Python directory
cd py

# Unix/Linux/macOS
jupyter notebook

# Windows
jupyter notebook
```

Or for Jupyter Lab:

```bash
jupyter lab
```

## JavaScript/Node.js Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### 1. Set Up Environment Variables for JavaScript

Create a `.env` file in the appropriate JavaScript directory with your API key:

```bash
# For AI applications (API-based)
echo "OPENAI_API_KEY=your_api_key_here" > js/WebsiteSummarizer/.env

# For Local LLM applications (if needed)
echo "OPENAI_API_KEY=your_api_key_here" > js/WebsiteSummarizer_Local/.env
```

### 2. Install Dependencies

Navigate to the desired JavaScript implementation directory and install dependencies:

```bash
# For API-based implementation
cd js/WebsiteSummarizer
npm install

# For Local LLM implementation
cd js/WebsiteSummarizer_Local
npm install
```

### 3. Run the JavaScript Applications

```bash
# In the respective directory (js/WebsiteSummarizer or js/WebsiteSummarizer_Local)
npm start
```

## Getting Started

### Python Notebooks

1. Open the Jupyter notebook in the `py/` directory
2. Run cells in order to set up the environment
3. Test the API connection
4. Experiment with different prompts and models

Available notebooks:

- `1. WebsiteSummarizer.ipynb` - AI application for content summarization using OpenAI API
- `2. WebsiteSummarizer(Local LLM).ipynb` - AI application using local LLM for content processing
- `3. OpenAI_Options_Practice.ipynb` - Practice notebook for exploring OpenAI API options and parameters
- `4. TokenUsage.ipynb` - Notebook for understanding and tracking token usage with OpenAI API

### JavaScript Applications

1. Navigate to the desired implementation directory in `js/`
2. Install dependencies with `npm install`
3. Set up your `.env` file with the required API keys
4. Run the application with `npm start`

Available implementations:

- `js/WebsiteSummarizer/` - AI application using OpenAI API for content processing
- `js/WebsiteSummarizer_Local/` - AI application using local LLM for content processing

## Contributing

This is a practice project for LLM engineering skills. Feel free to experiment and enhance the examples in both Python and JavaScript implementations.
