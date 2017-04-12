const BENCHMARK = {
    threshold: 40000
};

document.addEventListener('DOMContentLoaded', () => {
    console.log(`%c Benchmark started for ${BENCHMARK.threshold} cases...`, 'background: #000; color: #fff; font-size: 20px');

    stringApproach();
    domApproach();
    documentFragmentApproach();
});

function stringApproach() {
    let start = new Date();
    let result = '';
    let a;

    for (let i = 0; i < BENCHMARK.threshold; i++) {
        a = `<a href='/' style='display: block'>Link #${i}`;
        result = result.concat(a);
    }

    const ground1 = document.getElementById('ground-1');
    ground1.innerHTML = result;

    let end = new Date();
    console.log('STRING', end - start);
}

function domApproach() {
    let start = new Date();
    let a;
    const ground2 = document.getElementById('ground-2');

    for (let i = 0; i < BENCHMARK.threshold; i++) {
        a = document.createElement('a');
        a.href = '/'
        a.innerHTML = 'Link #' + i;
        a.style.display = 'block';
        ground2.appendChild(a);
    }

    let end = new Date();
    console.log('DOM', end - start);
}

function documentFragmentApproach() {
    let start = new Date();
    let a;
    let fragment = document.createDocumentFragment();
    const ground3 = document.getElementById('ground-3');

    for (let i = 0; i < BENCHMARK.threshold; i++) {
        a = document.createElement('a');
        a.href = '/'
        a.innerHTML = 'Link #' + i;
        a.style.display = 'block';
        fragment.appendChild(a);
    }

    ground3.appendChild(fragment);

    let end = new Date();
    console.log('DOCUMENTFRAGMENT', end - start);
}