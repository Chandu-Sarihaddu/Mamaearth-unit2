        var productsData = [{
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        },
        {
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        },
        {
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        },
        {
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        },
        {
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        },
        {
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        },
        {
            Image: "https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400",
            para: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
            rating: "4.3",
            price: "₹399",
            cart: "+Add To Cart"
        }
        ];
                
            
productsData.map(function (elem) {
    var mainDiv = document.createElement("div")
    
    var image = document.createElement("img")
    image.setAttribute("src", elem.Image)
    image.setAttribute("id","cartimage")
    
    mainDiv.append(image)
            
    document.querySelector("#container").appendChild(mainDiv)
        })
