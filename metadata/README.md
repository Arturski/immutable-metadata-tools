# Generate Dummy Metadata

The generate-dummy-metadata.py script is designed to generate dummy metadata files in JSON format. These files can be used for testing, simulation, or other purposes where dummy metadata is needed.

## Prerequisites
Python 3.x installed on your system.

## Usage
- Clone or download the repository to your local machine.
- Open a terminal or command prompt and navigate to the directory where the script is located.
- Run the script using the following command:
`python prepare-dummy-metadata.py`

The script will create a set of dummy metadata files in different directories. The number of files and directories can be configured by modifying the num_files list in the script.

Each JSON file contains randomly generated data for fields such as animation_url, description, image_url, name, rarity, and season. The values are randomized using a combination of uppercase letters and digits.

The script will create directories with names in the format metadata_<number_of_files>. Within each directory, individual JSON files will be generated with names corresponding to their index.

You can modify the script to adjust the size and structure of the generated metadata, as well as the naming conventions and data generation logic, according to your specific requirements.

## Note
Please ensure that Python 3.x is installed on your system before running the script.

Feel free to modify the script to suit your needs, such as changing the number of files, customizing the metadata structure, or adding additional fields.

Make sure to install any required Python dependencies before running the script, if applicable.