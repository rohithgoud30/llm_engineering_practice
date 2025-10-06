# LLM Engineering Practice Project

A hands-on project for learning LLM engineering best practices and development workflows.

## Setup Instructions

### 1. Install Conda/Mamba

Choose one of the following options:

#### Option 1: Miniconda (Recommended for beginners)

```bash
# Download and install Miniconda
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
bash Miniconda3-latest-MacOSX-x86_64.sh
```

#### Option 2: Miniforge (Faster alternative)

```bash
# Download and install Miniforge
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-x86_64.sh
bash Miniforge3-MacOSX-x86_64.sh
```

### 2. Create and Activate Environment

```bash
# Create environment
conda env create -f environment.yml

# Activate environment
conda activate llms
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root with your API key:

```bash
echo "OPENAI_API_KEY=your_api_key_here" > .env
```

### 4. Launch Development Environment

```bash
jupyter notebook
```

Or for Jupyter Lab:

```bash
jupyter lab
```

## Getting Started

1. Open the Jupyter notebook
2. Run cells in order to set up the environment
3. Test the API connection
4. Experiment with different prompts and models

## Troubleshooting

### Common Issues

1. **Environment Creation Fails**

   ```bash
   # Update conda
   conda update conda
   ```

2. **Import Errors**

   - Make sure the environment is activated
   - Restart the Jupyter kernel after activating the environment

3. **API Key Issues**
   - Ensure your `.env` file is in the correct directory
   - Check that there are no extra spaces in the API key

## Contributing

This is a practice project for LLM engineering skills. Feel free to experiment and enhance the examples.
