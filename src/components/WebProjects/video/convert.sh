#!/bin/bash

# Directory containing MP4 files
input_dir="./"
output_dir="../gif"

# Create output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through all MP4 files in the input directory
for input_file in "$input_dir"/*.mp4; do
  # Extract the base name of the file (without extension)
  base_name=$(basename "$input_file" .mp4)

  # Define the output file path
  output_file="$output_dir/$base_name.gif"

  # Convert MP4 to GIF with 30fps but small size
  ffmpeg -i "$input_file" -vf "fps=30,scale=320:-1:flags=lanczos" -c:v pam -f image2pipe - | convert -delay 3 - -loop 0 "$output_file"

  echo "Converted $input_file to $output_file"
done
