# Metadata Endpoint Performance Testing

This repository contains scripts written in GO and Python for performing performance tests against metadata endpoints hosted on IPFS gateways Web3.Storage and NFT.Storage. The scripts use JSON input files to specify the URLs and IDs to test.

## Scripts

### GO Script

The GO script (`go run test-storage-perf.go`) is used to test the metadata endpoints using the GO programming language. It performs multiple passes of HTTP GET requests to the specified URLs and IDs, measuring the response times for each pass.

To run the GO script, follow these steps:

1. Install GO on your system if it's not already installed.
2. Clone this repository to your local machine.
3. Edit the name of the input file
4. Open a terminal and navigate to the repository's directory.
5. Execute the following command to run the script:

```go run test-storage-perf.go```


The script will read the input data from the `input-go-w3.json` file and perform the performance tests against the specified URLs and IDs.

### Python Script

The Python script (`main.py`) is used to test the metadata endpoints using the Python programming language. It also performs multiple passes of HTTP GET requests to the specified URLs and IDs, measuring the response times for each pass.

To run the Python script, follow these steps:

1. Ensure you have Python installed on your system (Python 3.6 or above).
2. Clone this repository to your local machine.
3. Edit the name of the input file
4. Open a terminal and navigate to the repository's directory.
5. Execute the following command to run the script:

```python3 test-storage-perf.py```


The script will read the input data from the `input-py-nfts.json` file and perform the performance tests against the specified URLs and IDs.

## Input Files

The repository includes two sample input files that specify the URLs and IDs to test:

1. `input-go-nfts.json`: This JSON file is used by the GO script (`test-storage-perf.go`) and contains a list of objects, each specifying a URL and a list of corresponding IDs to test.

2. `input-py-nfts.json`: This JSON file is used by the Python script (`test-storage-perf.py`) and has the same structure as the GO input file. It contains a list of URL-ID pairs to test.

You can modify these input files or create your own files with a similar structure to test different URLs and IDs.

**Note:** Ensure that the URLs provided in the input files are accessible and valid.

## Customization

You can customize the number of passes performed by both scripts by modifying the `numPasses` variable in each script. By default, the number of passes is set to 5.

Feel free to modify the scripts to fit your specific requirements or integrate them into your existing testing infrastructure.

**Note:** Make sure to install the necessary dependencies (`requests` library for Python script) if you haven't already done so. You can use `pip` to install the Python dependencies:

