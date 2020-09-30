// NAV BAR
let burger = document.querySelector('.burger');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');



let slidenav = document.querySelector('.slidenav');
let navOpen = false;

// ITEMS FLIP
let filters = document.querySelectorAll('.filter');
for (filter of filters) {
    filter.addEventListener('click', showDescribtion); 
}
let describtion = document.querySelector('.item-description');
let amountItem = document.querySelector('.amount');
let closeBTNs = document.querySelectorAll('.fa-times-circle');
for (const closeBTN of closeBTNs) {
    closeBTN.addEventListener('click', closeDescribtion);
}
// CART modal
let cartBTN = document.querySelector('.cart-logo');
let cartModal = document.querySelector('.cart-modal');
let cartOpen = false;

// ADD to Cart
let cartList = document.querySelector('.cart-modal ul')
let cartAddBtns = document.querySelectorAll('.add-to-cart');

// home PAGE
let homePage = document.querySelector('.items')
// Update Cart
updateItems()
// REMOVE ALL
let deleteAll = document.querySelector('.deleteAll')
let pay = document.querySelector('.pay')

// EVENTS
burger.addEventListener('click', toggleNav);
cartBTN.addEventListener('click', toggleCart);
deleteAll.addEventListener('click', getPopUp)

for (const cartAddBtn of cartAddBtns) {
    cartAddBtn.addEventListener('click', addItem)
}


// Functions
// NAV BAR
function toggleNav(){
    if (navOpen === false) {
        slidenav.style.top = '90px';

        line1.style.top = '16px';
        line3.style.top = '-16px';
        line1.style.transform = 'rotate(45deg)';
        line3.style.transform = 'rotate(135deg)';
        line2.style.transform = 'rotate(135deg)';

        navOpen = true;
    } else if (navOpen === true) {
        slidenav.style.top = '-150px';

        line1.style.top = '0px'
        line3.style.top = '0px';
        line1.style.transform = 'rotate(0deg)';
        line3.style.transform = 'rotate(0deg)';
        line2.style.transform = 'rotate(0deg)';

        navOpen = false;
    }
};
function toggleCart(){
    if (cartOpen === false) {
        cartModal.style.height = '80%';
        cartModal.style.padding = '30px';
        cartOpen = true
    } else if (cartOpen === true) {
        cartModal.style.height = '0%';
        cartModal.style.padding = '0px';
        cartOpen = false;
    }
};
function closeCart() {
    cartModal.style.height = '0%';
        cartModal.style.padding = '0px';
        cartOpen = false;
}
// ITEM CARD FLIP
function showDescribtion(){
    this.parentElement.childNodes[1].style.height = '500px';
    this.parentElement.childNodes[1].style.width = '350px';
    this.parentElement.childNodes[1].style.opacity = '1';
    this.style.width = '0px';
};
function closeDescribtion(){
    this.parentElement.style.height = '0px';
    this.parentElement.style.width = '0px';
    this.parentElement.style.opacity = '0';
    for (filter of filters) {
        filter.style.width = '380px';
    }
};
// ADDING and REMOVE ITEMS TO CART
function updateItems(){
    let inCartItems = document.querySelectorAll('.cart-modal input')
    for (const inCartItem of inCartItems) {
        inCartItem.addEventListener('change', updateValues)
    }
}
function addItem(event){
    // Search for DUplicates

    let itemCardName = this.parentElement.parentElement.childNodes[3].innerHTML;

    let incartItems = document.querySelectorAll('.cart-item-name');
    for (let z = 0; z < incartItems.length; z++) {
        if (incartItems[z].innerHTML === itemCardName) {
            let filter = document.querySelector('.confirmation-filter');
            let cartAmoutnWarning = document.querySelector('.cartAmountWarning');
            cartAmoutnWarning.style.display = 'flex';
            filter.style.display = 'initial';
            return
        } 
    }

        let name = this.parentElement.parentElement.childNodes[3].innerHTML
        let amount = parseInt(this.parentElement.childNodes[5].value);
        let price = parseFloat(this.parentElement.childNodes[3].value) * amount;


        let item = document.createElement('LI');
        item.setAttribute('class', 'InCart')
        let removeBtn = document.createElement('i');
        removeBtn.setAttribute('class', 'far fa-times-circle')
        
        
        let nameSlot = document.createElement('DIV');
        nameSlot.setAttribute('class', 'cart-item-name')

        let amountSlot = document.createElement('INPUT');
        amountSlot.setAttribute('type','number');
        amountSlot.setAttribute('value', amount);

        let priceSlot = document.createElement('DIV');
        priceSlot.setAttribute('class', 'price');

        let hiddenPriceSlot = document.createElement('DIV');
        hiddenPriceSlot.setAttribute('class', 'hidden-price');
            
        nameSlot.appendChild(document.createTextNode(name));
        priceSlot.appendChild(document.createTextNode( price.toFixed(2)));
        hiddenPriceSlot.appendChild(document.createTextNode( price.toFixed(2)));
        
        item.appendChild(amountSlot)
        item.appendChild(nameSlot)
        item.appendChild(priceSlot)
        item.appendChild(hiddenPriceSlot)
        item.appendChild(removeBtn)
        
        cartList.appendChild(item)
        // this.disabled = true
        // this.style.color = '#DAAD86';
        // this.style.backgroundColor = '#BC986A';

        let deleteBTNs = document.querySelectorAll('.cart-modal i');
        for (const deleteBTN of deleteBTNs) {
            deleteBTN.addEventListener('click', removeItem);
        }

    updateItems()
    loopThroughCart()

};
function removeItem(){
    // let cartAmount = parseInt(document.querySelector('.amount-in-cart').innerHTML);
    // let cart = document.querySelector('.amount-in-cart');
    // let subtractAmount = this.parentElement.childNodes[0].value;
    // cartAmount = cartAmount - subtractAmount;
    // cart.innerHTML = cartAmount;
    this.parentElement.remove(); 
    updateItems()
    loopThroughCart()
}

function updateValues(){
    let value = parseInt(this.value);
    if (value >= 0) {    
        // console.log(value); 
        let cart = parseInt(document.querySelector('.amount-in-cart').innerHTML); 
        
        // console.log(this.parentElement.childNodes[3].innerHTML * value);
        this.parentElement.childNodes[2].innerHTML = (this.parentElement.childNodes[3].innerHTML * value).toFixed(2)
        // let price = value * parseFloat(this.parentElement.childNodes[2].innerHTML);
        // this.parentElement.childNodes[2].innerHTML = price.toFixed(2)
        updateItems()
        loopThroughCart()
    } 
    if (value < 0) {
        alert("Items cannot be lower than 0")
        value = 0;
        this.disabled = true;
        this.value = value;
        this.disabled = false; 
        updateItems()
        loopThroughCart()
    }
}
// CONFIMATIONS
function getPopUp() {
    let filter = document.querySelector('.confirmation-filter');
    let removeConfirm = document.querySelector('.removalConfirmation');
    filter.style.display = 'initial';
    removeConfirm.style.display = 'flex';
}
function closePopUp() {
    let filter = document.querySelector('.confirmation-filter');
    let removeConfirm = document.querySelector('.removalConfirmation');
    let cartAmoutnWarning = document.querySelector('.cartAmountWarning');
    filter.style.display = 'none';
    removeConfirm.style.display = 'none';
    cartAmoutnWarning.style.display = 'none';
}
function loopThroughCart(){
    let cartItem = document.querySelectorAll('.cart-modal li input');
    let total = 0;
   for (let i = 0; i < cartItem.length; i++) {    
       total += parseInt(cartItem[i].value)
    //   console.log(parseInt(cartItem[i].value));
    
   }
   let price = document.querySelectorAll('.cart-modal .price');
   let sum = 0;
   for (let z = 0; z < price.length; z++) {
        sum += parseFloat(price[z].innerHTML)   
   }
   
   
   document.querySelector('.amount-in-cart').innerHTML = total;
   document.querySelector('.total').innerHTML = 'Total: $' + sum.toFixed(2)

   if (total > 0) {
       deleteAll.style.display = 'initial';
       pay.style.display = 'initial';

   } else {
    deleteAll.style.display = 'none';
    pay.style.display = 'none';
   }
   
}
function removeAll(){
    let items = document.querySelectorAll('.cart-modal li')
    for (let z = 0; z < items.length; z++) {
        items[z].remove()
   }
//    let addToCart = document.querySelectorAll('.add-to-cart');
//    for (let a = 0; a < addToCart.length; a++) {
//        addToCart[a].disabled = false;
//        addToCart[a].style.backgroundColor = '#8D8741';
//        addToCart[a].style.color = 'ivory';
       
//    }
   closePopUp()
   updateItems()
    loopThroughCart()
}

// *******************************************************************
let data = [
    {
        keywords: [
            document.getElementById('tripleSeatKayak'),
            'kayak', 
            'kayaks', 
            'boat', 
            'boats', 
            'water',
            'tripleseatkayak',
            'triplekayak',
            'canoe',
            'canoes',
        ]
    },
    {
        keywords: [
            document.getElementById('mountainBicycle'),
            'mountainbicycle', 
            'mount', 
            'bicycle',
            'wheel',
            'bike',
        ]
    },
    {
        keywords: [
            document.getElementById('bookBag'),
            'bag', 
            'bookbag', 
            'carry',
        ]
    },
    {
        keywords: [
            document.getElementById('mediumCanoe'),
            'kayak', 
            'kayaks',
            'boat', 
            'boats', 
            'water',
            'mediumcanoe',
            'canoe',
            'canoes',
        ]
    },
    {
        keywords: [
            document.getElementById('largeRucksack'),
            'rucksack', 
            'bag', 
            'largerucksack',
            'carry',
        ]
    },
    {
        keywords: [
            document.getElementById('beachBicycle'),
            'beachBicycle', 
            'bike', 
            'bicycle',
            'wheel',
        ]
    },
    {
        keywords: [
            document.getElementById('bottle'),
            'bottle', 
            'water', 
            'steel',
            'waterbottle',
            'steelwaterbottle',
        ]
    },
    {
        keywords: [
            document.getElementById('hammock'),
            'hammock', 
            'canopy', 
            'eno',
            'sleep',
            'hummock',
            'hamock',
        ]
    },
    {
        keywords: [
            document.getElementById('camperCup'),
            'cup', 
            'cups', 
            'water', 
            'campercup',
            'drink',
            'glass',
            'tea',
        ]
    },
    {
        keywords: [
            document.getElementById('lifeVest'),
            'water', 
            'lifevest', 
            'lifevests',
            'life',
            'vest',
            'vests',
            'watervest',
            'floatvest', 
            'waterjacket'
        ]
    },
    {
        keywords: [
            document.getElementById('durableOar'),
            'water', 
            'oar', 
            'oars', 
            'durableoar',
            'paddle',
            'paddles',
            'rower',
        ]
    },
    {
        keywords: [
            document.getElementById('tent'),
            'tent', 
            '3persontent', 
            'largetent',
            'sleep',
            'tents',
        ]
    },
    
];

let searchBtn = document.querySelector('.search');
let inputRefresh = document.querySelector('.search-items');
let searchBtn1 = document.querySelector('.search-slide');
let inputRefresh1 = document.querySelector('.search-items-slide');

let result = document.querySelector('.result');



searchBtn.addEventListener('click', getSearch);
searchBtn1.addEventListener('click', getSearch1);
inputRefresh.addEventListener('input', refreshSearch);
inputRefresh1.addEventListener('input', refreshSearch);

// inputRefresh.addEventListener('input', refreshSearch)
function getSearch(e){
    e.preventDefault()
    let input = document.querySelector('.search-items').value.split(' ').join(''); 
    homePage.style.width = '0%' ;
    result.style.width = '100%';
    for (let item = 0; item < data.length; item++) {
        let keywords = data[item].keywords;

        for (let keyword = 0; keyword < keywords.length; keyword++) {
            if (keywords[keyword] === input.toLocaleLowerCase()) { 
                let itemId = keywords[0]
                let clone = itemId.cloneNode(true);
                result.appendChild(clone);      
            }
        }
    }
    // CARD
    let filters = document.querySelectorAll('.filter');
    for (filter of filters) {
        filter.addEventListener('click', showDescribtion); 
    }
    let closeBTNs = document.querySelectorAll('#exit');
    for (const closeBTN of closeBTNs) {
        closeBTN.addEventListener('click', closeDescribtion);
    }
    //Cart
    let cartAddBtns = document.querySelectorAll('.add-to-cart');
    for (const cartAddBtn of cartAddBtns) {
        cartAddBtn.addEventListener('click', addItem)
    }
}

function refreshSearch(){
    let results = document.querySelectorAll('.result div');
    for (let item = 0; item < results.length; item++) {
        result.removeChild(results[item])
    };
}
// **********************

function getSearch1(e){
    e.preventDefault()
    let input = document.querySelector('.search-items-slide').value.split(' ').join('');
    homePage.style.width = '0%' ; 
    result.style.width = '100%';
    for (let item = 0; item < data.length; item++) {
        let keywords = data[item].keywords;

        for (let keyword = 0; keyword < keywords.length; keyword++) {
            if (keywords[keyword] === input.toLocaleLowerCase()) { 
                let itemId = keywords[0]
                let clone = itemId.cloneNode(true);
                result.appendChild(clone);      
            }
        }
    }
    // CARD
    let filters = document.querySelectorAll('.filter');
    for (filter of filters) {
        filter.addEventListener('click', showDescribtion); 
    }
    let closeBTNs = document.querySelectorAll('#exit');
    for (const closeBTN of closeBTNs) {
        closeBTN.addEventListener('click', closeDescribtion);
    }
    //Cart
    let cartAddBtns = document.querySelectorAll('.add-to-cart');
    for (const cartAddBtn of cartAddBtns) {
        cartAddBtn.addEventListener('click', addItem)
    }
}

function refreshSearch(){
    let results = document.querySelectorAll('.result div');
    for (let item = 0; item < results.length; item++) {
        result.removeChild(results[item])
    };
}

function returnHome(){
    homePage.style.width = '100%' ;
    result.style.width = '0%';
    let items = document.querySelector('.items')
    contactInfo.style.display = 'none';
    items.style.display = 'grid';
}
// *****************************FORM VALIDATION
let form = document.getElementById('form');
let contactInfo = document.querySelector('.contactInfo');

form.addEventListener('submit', verifyForm);

function verifyForm(event){
    let errorMsg = document.querySelector('.error-msg');
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email  = document.getElementById('email').value;
    const regex = /\S+@\S+\.\S+/;
    let number = document.getElementById('number').value.replace(/ /g,'');
    let address = document.getElementById('address').value;
    let country = document.getElementById('country').value;
    let payment = document.getElementById('payment').value;
    // FNAME
    if (fname === ''|| fname === null|| isNaN(fname) == false ) {
        document.getElementById('fname').style.border = '2px solid crimson';
        errorMsg.style.display = 'flex';
        event.preventDefault();
    } else if (fname.length > 0) {
        document.getElementById('fname').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    };
    // LNAME
    if (lname === ''|| isNaN(lname) == false) {
        document.getElementById('lname').style.border = '2px solid crimson';
        errorMsg.style.display = 'flex';
        event.preventDefault()
    } else if(lname.length > 0){
        document.getElementById('lname').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    };
    // email
    if (regex.test(email) === false) {
        document.getElementById('email').style.border = '2px solid crimson'
        errorMsg.style.display = 'flex';
        event.preventDefault()
    } else if (regex.test(email) === true){
        document.getElementById('email').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    }
    // PHONE
    if (number === ''|| number === null|| isNaN(number) == true || number.length > 10 || number.length < 10) {
        document.getElementById('number').style.border = '2px solid crimson';
        errorMsg.style.display = 'flex';
        event.preventDefault()
    } else if (number.length === 10) {
        document.getElementById('number').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    };
    // ADDRESS
    if (address === ''|| address.length < 5|| address === null) {
        document.getElementById('address').style.border = '2px solid crimson';
        errorMsg.style.display = 'flex';
        event.preventDefault()
    } else if (address.length >= 5) {
        document.getElementById('address').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    }
    // COUNTRY
    if (country ===  '') {
        document.getElementById('country').style.border = '2px solid crimson';
        errorMsg.style.display = 'flex';
        event.preventDefault()
    } else {
        document.getElementById('country').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    }
    // PAYMENT METHOD
    if (payment ===  '') {
        document.getElementById('payment').style.border = '2px solid crimson';
        errorMsg.style.display = 'flex';
        event.preventDefault()
    } else {
        document.getElementById('payment').style.border = '2px solid #659DBD';
        errorMsg.style.display = 'none';
    }
};
function getContactForm() {
    let items = document.querySelector('.items')
    contactInfo.style.display = 'flex';
    items.style.display = 'none';
    closeCart()
}
