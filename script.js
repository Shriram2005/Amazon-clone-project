// hover black effect show on hover 
const rBox1 = document.querySelector(".nav-right-box1")
const hoverEffect = document.querySelector('.hover-black-effect');
const inputSearch = document.querySelector(".nav-search-div input")
const navSearchDiv = document.querySelector(".nav-search-div");
const selectCategory = document.getElementById("category");
const searchIcon = document.querySelector(".nav-search-icon");

    rBox1.addEventListener('mouseover', () => {
        hoverEffect.style.display = 'block';
    });
    
    rBox1.addEventListener('mouseout', () => {
        hoverEffect.style.display = 'none';
    });

    // search focus border and black effect show
    inputSearch.addEventListener('focus',() => {
        hoverEffect.style.display = 'block';
        navSearchDiv.style.border = "3px solid #ff9100";
    })

    inputSearch.addEventListener('focusout',() => {
        hoverEffect.style.display = 'none';
        navSearchDiv.style.border = "none";
    })

    selectCategory.addEventListener("focus",() => {
        selectCategory.style.border = "3px solid #ff9100";
        selectCategory.style.boxSizing ="content-box";
    })

    selectCategory.addEventListener("focusout",() => {
        selectCategory.style.border = "none";
    })

    // searchIcon.addEventListener("click",() => {
    //     searchIcon.style.border = "3px solid #ff9100";
    //     searchIcon.style.boxSizing ="content-box";
    // })


