# A quick and dirty wordcloud generator.

You have a large text file and you need a wordcloud? Look no further!

Based on wordcloud layout by Jason Davies, [wordcloud](https://www.jasondavies.com/wordcloud/)  
Algorithm due to Jonathan Feinberg, [wordle](http://static.mrfeinberg.com/bv_ch03.pdf)  

## Demo
Click <a href="https://rawgit.com/g1eb/wordcloud/master/" target="_blank">here</a> for a live demo.

## Usage

1) Take a text file and run it through `filter.py` script

```
$ ./filter.py -i data.txt -o output.json
```

You can supply a noise file using the -n flag, __noise_en.json__ is used by default  
The script expects __output.json__, if you rename output file change the script in src/js/cloud.js

2) Serve that directory and view wordcloud in a browser :)

```
$ python -m SimpleHTTPServer 8000
```

or:

```
$ npm install -g serve
$ serve .
```



## Dependencies

### Filtering
* [pandas](http://pandas.pydata.org/)

### Visualisation
* [d3.js](https://d3js.org/)
* [d3.layout.cloud.js](https://gist.github.com/emeeks/3361332)
