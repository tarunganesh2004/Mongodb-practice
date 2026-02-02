grep -i "deepak" emp.txt               # Case-insensitive search

grep -v "HR" emp.txt                   # Prints lines NOT matching HR

grep -n "HR" emp.txt                   # Prints line numbers with matches

grep -c "HR" emp.txt                   # Prints count of matching lines

grep -w "HR" emp.txt                   # Matches whole word HR only

grep -l "HR" *.txt                     # Prints filenames containing HR

grep -r "HR" /home/user                # Recursively searches directories