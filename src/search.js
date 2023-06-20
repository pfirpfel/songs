const performSearch = function () {
    const trs = document.querySelectorAll('table tbody tr')
    const filter = document.querySelector('#search').value
    const regex = new RegExp(filter, 'i')
    const isFoundInTds = td => regex.test(td.innerHTML)
    const isFound = childrenArr => childrenArr.some(isFoundInTds)
    let lastEven = true
    const getOddEven = () => (lastEven = !lastEven) ? 'odd' : 'even'
    const setTrStyleDisplay = ({ style, children, classList }) => {
        let found = isFound([
            ...children // <-- All columns
        ])
        style.display = found ? '' : 'none'
        if (found) {
            classList.remove('odd', 'even')
            classList.add(getOddEven())
        }
    }

    trs.forEach(setTrStyleDisplay)
};
