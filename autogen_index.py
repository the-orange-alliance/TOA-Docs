import glob
from os.path import basename, relpath

# AUTOGENERATES THE _INDEX.YML FILE IN ./OPENAPI/TYPES

files = glob.glob("./openapi/types/**/[!_]*.yml", recursive=True)

output = ""

for file in files:
    name = basename(file).split(".")[0]
    relative_path = relpath(file, "./openapi/types")
    output += f'{name}:\n  $ref: "./{relative_path}"\n'

with open("./openapi/types/_index.yml", "w") as f:
    f.write(output)


