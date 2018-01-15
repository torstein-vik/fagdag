/*

0 is ordinary friday,
-1 is vacation,
1-6 are the specific subjects,
text is something else
tuple is split day

*/

var weekSpec = [
    0,
    'Skolevalgdebatt',
    6,
    2,
    1,
    4,
    5,
    -1,
    3,
    0,
    6,
    2,
    1,
    4,
    5,
    3,
    6,
    -1,
    -1,
    2,
    1,
    4,
    5,
    3,
    2, 
    1, 
    -1, 
    4, 
    6, 
    0,
    5,
    -1,
    3,
    [4, 5],
    [2, 3],
    [1, 6],
    'Studiedag',
    -1,
    -1,
    'Eksamen: Norsk hovedmål',
    'POM',
    'Fagfestival',
    'Fagfestival',
    'Sommerferie!'
]


// List of the first four subjects
var personSpec = {
    'Karoline': [['Matematikk S2', 'A527'], 0, 0, ['Kjemi 2', 'A429, A431']],
    'Elias':    [0, ['Matematikk R2', 'B339'], 0, ['Fysikk 2', 'A439, A441']],
    'Ruben':    [['Biologi 2', 'A427'], ['Matematikk S2', 'A509'], ['IT 2', 'A533'], 0],
    'Isak':     [0,0,['Samføk. 2', 'A526'], ['Pol. og menneskeret.', 'A509']],
    'Frida':    [['Matematikk S2', 'A527'], 0, ['Tysk 1 + 2', 'A360'], ['Kjemi 2', 'A429, A431']],
    'Elida':    [['Rettslære 1', 'A533'], ['Rettslære 2', 'B410'], ['Eng. spr. litt. og kult.', 'A512'],0],
    'William':  [['Kjemi 2', 'A429, A431'], ['Matematikk R2', 'B339'], 0, 0],
    'Levi':     [0,['Matematikk R2', 'B339'], ['Psykologi 1', 'A527'], ['Fysikk 2', 'A439, A441']],
    'Kristian': [0,0,['Samføk. 2', 'A526'], ['Pol. og menneskeret.', 'A509']],
    'Henrik':   [['Kjemi 2', 'A429, A431'], ['Matematikk R2', 'B339'], 0, ['Fysikk 2', 'A439, A441']],
    'Håvard':   [['Kjemi 2', 'A429, A431'], ['Matematikk R2', 'B339'], 0, 0],
    'Sander':   [['Økonomistyring', 'A537'], ['Matematikk S2', 'A509'], ['Samføk. 2', 'A526'], 0],
    'Emil':     [['Internasj. engelsk', 'A542'],0,0,['Fysikk 2', 'A439, A441']],
    'Ludvik':   [0,0,0,['Fysikk 2', 'A439, A441']],
    'Linda':    [0,['Matematikk R2', 'B339'], ['IT 2', 'A533'], 0],
    'Preben':   [0,['Kjemi 1', 'A429, A431'], ['IT 2', 'A533'], ['Fysikk 2', 'A439, A441']],
    'Torstein': [0,0,0,0],
    'Malene':   [0,['Matematikk R2', 'B339'],['Samføk. 2', 'A526'],0],
    'Steinar':  [['Biologi 2', 'A427'], 0, ['Tysk 1 + 2', 'A360'], ['Kjemi 2', 'A429, A431']]

}

var commonSpec = [['Norsk', '???'], ['RLE', 'B410']]
