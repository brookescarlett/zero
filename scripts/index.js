document.addEventListener('DOMContentLoaded', function(e){

    console.log('hi')

    // build a panel
    function productText(section) {
        let sect = document.getElementById(section)
        console.log(sect)
        let sectData = data["products"][section]
        console.log(sectData)
        
        let price = sect.getElementsByClassName('price')[0]
        console.log(price)
        price.innerText = sectData.price

        let img = sect.getElementsByClassName('prod-img')[0]
        img.src = sectData.img_url

        let descript = sect.getElementsByClassName('descript')[0]
        descript.innerText = sectData.descript

        let brand = sect.getElementsByClassName('brand')[0]
        brand.innerText = sectData.brand
    }

    productText('one')
    productText('three')
    productText('five')

    function faq() {
        let sect = document.getElementsByClassName('questions-container')[0]
        console.log(data["faq"])

        let counter = 0
        while (counter < 4) {
            let div = document.createElement('div')
            div.className = 'faq-item-container'

            let q = document.createElement('p')
            q.className = "faq-sub-header"
            q.innerText = data["faq"][0]

            let a = document.createElement('p')
            a.className = "faq-body-type"
            a.innerText = data["faq"][1]

            div.appendChild(q)
            div.appendChild(a)
            sect.appendChild(div)

            counter++
        }
    }

    faq()

    
    
})
