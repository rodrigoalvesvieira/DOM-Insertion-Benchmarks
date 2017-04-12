# DOM-Insertion-Benchmarks

The goal of this project is to provide a bare-bones benchmark of two popular approaches for dynamically insertion of elements in the DOM vs the `DocumentFragment` API.

## The test

Create one div for every one of the three approaches. Have an anchor (`a`) be inserted into that div 40k times and compare which one is faster. 

## Results

In a nutshell....

![Results](http://i.imgur.com/MtfdJtX.png)(Results for 40k elements.)


