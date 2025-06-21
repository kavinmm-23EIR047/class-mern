console.log("Hello, World!");
console.warn("Error!")
console.error("This is an error message.");
console.table([{name: "Alice", age: 30}, {name: "Bob", age: 25}]);
eval("let a=5;console.log(\"Hello World\");console.log(a);");
x=3.14;
console.log(x);
let obj = [{name:"Alice",age:20,name:"bob",age:10}];
let str=JSON.stringify(obj)
console.log(str);
let back=JSON.parse(str);
console.log(back);

localStorage.setItem("name","Alice");
localStorage.setItem("age", 30);
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");

sessionStorage.setItem("sessionName", "Bob");
console.log(sessionStorage.getItem("sessionName"));


// promise 

// let promise = new Promise((resolve, reject) => {
//     let success = false; // Change this to false to test rejection
//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });
// promise.then(res => console.log(res)).catch(err=>console.log(err));


let promise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
    setTimeout(() => {resolve(success)}, 2000);
    setTimeout(() => {reject("Error")}, 2000);
});
promise.then(res => console.log(res)).catch(err=>console.log(err));



    // closure
    function outer(){
        let name = "Alice";
        return function inner(){
            console.log("Hello, " + name);
        }

    }

//DOM
let dom = document.getElementById("DOM");
let body = document.querySelector(".div");
setTimeout(() => {
dom.innerText = "Hello, DOM!";
dom.style.color = "blue";
},2000);
let newElement=document.createElement("h1");
setTimeout(() => {
 newElement = document.createElement("h1");

newElement.innerText = "Kavin M M";
dom.appendChild(newElement);
},4000);

setTimeout(()=>{
    dom.removeChild(newElement);
},14000)

let img1 = document.querySelector("img");
{ 
   setTimeout(()=>{
    img1.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0gMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEEBQYDB//EADoQAAEDAwIEBAQEBAUFAAAAAAEAAgMEBRESIQYxQVETImFxFDKBoSNCkbEVM1LBJFNi0fAHNENygv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgIDAQEBAQAAAAAAAAECEQMSITEiMkETM1EE/9oADAMBAAIRAxEAPwDyROnwnwrZmCdLCdMjYTp04CAZLCLCQQRsJ8J8J0AOEsIsJ8IAcJI8JsbIAUiEWEkgDCbCPCRCDBhMQjTYykHPCYrphCQgwEJkeE2EAKEhGhKDCkiwkgOiSdJUkk6SWEAsIgEsJ0EWE+EgE6ASSfCm0Nqrq8F1JSSSMG2rGGj6nZBWoQCu+H+Gqy9PDm4hpQcOmcOfo0dSpFr4YlkucMFbNTiLUfFbFLqfpHsPZX1642tNk/wdBTGeSLyhrT5GemUJ3b4i0pOD7JSwkSU4qH4wXzOLvtyC4VvA9omJNOJYCRyZJkfoVha//qLe6oObB4cDT0DA4j+37rhQcd32nqRLPUOmj6xkDB+yk/55Lq9cG1lvjM1M/wCJibu4AYc0e3VZkjdesWHiChv0AfTStEuPPC47g9sLL8W8NvFbFPaKd0onDjJEz8jhjf2OfsnCxurqsdhMpNRSVFM4tqIJYiOethH7rghew4TFFhMgwpiEeEJSAEJC6FCgwJiERTIAUyLCSANOknAVEYIhySATpkSIJAJwEFsk4CnWq01l1eW0kWWtPmldsxvue/org8FXE1DIoZqebPzlpI8P1OeiC7RRUFHLX1LKembl539AOpK2d2lNsspho5NIijwBtg45/qri30FLYaIQUw1ykfiTEeZ5/sOwWb4tY6poKgwAmTQcsHX190TyjLzYz9JVTUHD9TXPe74uvJa0nm2IcyO2T1VPb7W+vJkkbO/PMRNyf2K0F1gmNJS0Bi0l/hU8bycjBIXW58W1PDtwltViZBFRUZMB1RgumeNnPeeZJIO3IBZ5ZaunThhvDcVcUNDSO0/w+F7xsTUanH9CcfZNVOpKkaXW+kjPIGCNzD9nYP1CtLzXsv3D0F68COGqin+FqhGMMc7Tqa8DpkZBHcbc1y4Tkp6SjuV6qohMKGIGON3Jz3HS0H0zz9B6p9sdI/nnv2pBBVWiRlVSGoicD+dpGfsFtpr3JeOHjWU0gbWU7fEI6nTzB/51VFR8d3GorWxXdlNWW2Uhs1KYGsAaeeggZaexypVDSizX272jX4kMTzoeeZa4DGf/AJIyljl50rl4vj2aa1V/8UtkctVpcHjzR9Mdv0WFuVDJbqt9PKDt8jj+ZvQrUcEB1LbI4pTl4JOx6ZWurKGku9L4VfEHj+vYOZ7HorrDH42vHiO6bC3kXAdPh4kuE5OSGFsQDceoPP6FZu+8P1tmc10wEsDjhszBtnsR0KlcylU5TI8IShQCEOF0IQoAChIRlCeaDCknSQBJwmRAK0nTpkSCILR8OcMy3LRUVRMdMdwB80nt2Hqj4TsTatwrq0N+Gb8jXfnI6n0WguPEEjHfD2iEvl5ayNk9MsuTzqNBS0VNR07GNMcETBsBsoddWWiKTxRcGQ1DBscjDvdY+rtl7rsvq63ST+QEqtPC9xecNbrHQlGinX/rUVvEdDURSPilxJH87ef1B6hZC53qWbPgkknkAo9TRm3zSU1UX+Kdi1o8oPMZK5sa1o8oAS9NJr2lXytnfBbqmMgNieHY56XjllSLpY3cS1b7tYnwStqXa56V8zY5KeQ/MCHEZbnJBHQqPb66GmlfS1sLJaOo8rtQ3b6j6qou1H/D6t0WS6PnGT27LPPG3zG/FnJOtW94EdnscdibPFUVT6j4qrfC7UyMhulkYP5iN3E8twN0HDVTSyQV9nuE4ghuMbRHUP8AkimYcsLscmnkT05rOa/VLX6qOvhr3+W2so+D5KCoFTfamlpbdC7U97KhkjpQN9MbWnJJx6LmLsa+53W7TsETql+WsByGDkBn0GB9FlvEJO255BaC10j60wW2IDzyDx5T+VvN32BRjNfKp5L2nWJFsu81BUubVNcwtdktPY4P7FelUVUysa1kTxojw6QuPNxGw/Reb3pzZ7vUnAxr0YPTSA3+ylwVk1JrMddTsjc/VoA39MrbG7nlycsn49MjfO04e4PHQDohldE5j2ysAjeMOa4agfdZW2cSv0huWvG2cHqruC6wzD5QT7KurntsZTiPhkRaqu1gui5vg5lg7juPRZTY7gghesGVknyktx2IUSstduuA0VcTSRykZs/Hv/ZK46aYc35XmKEhXXEFhqLRUO2dJSk5ZMBtjsfX91THkodISEBRlCUAKdJJAOEQTBErIgrSx2p1xnLpAW0sf8xw5n/SPX9k1htbrrVFhJZBG3VLIOg7D1K1rpqShp8DENLCMNaOp/ufVVIx5eTXiJQpzVxtgjZ4dO0ANa3bA6bKVFBQ0LQHzRxY54IWEuvF1VPmG2RmKHPNo3Kz1S6vneZJ3vcepcUrUYcNvuvXP4vZ4gSamF+O5BVbdeMqWBpZbo2zSnqflavKyHNeA7OrPRW7GBjAwdEbafykSK2rnrpjNVSF7iSfQZXIJJDc46oU5VI/BJ7Lh8a+Sl+GqQJYfyh4y5n/AKnmPZSpNJYQ4hVsoDXEO2U1ePlFnhEZyzzN74XFSzK3lz9MIhTMbiSfyA8mfmd6+gUWNYGgp3SSeI8tjjbuXn8o9up7BbXhWqgZDcawM0xUsQZE1x3JJzk+pxusa+RxAaBpYPlaOn+59VtOHrZC+gFql1/FTPE9RpOPBGPKD9Onqs87JPK8Zd+FBknJccknJPqmcwSPYXuLdJG7RkqdVWqsgq3U3w0z3BxDNMZOsDqMKN8NN4vhOic2TONL/Lv9VtLPbnuNaqktVplY2X+LQkO3ADMH6hWUdDbm/Jdc7YGCMFYWajdAXCsdTxFmch8zTjHTyk81TEF8pEc2GncZJGFUzZX/AM9vmvXBQucP8PWRSHHdBJDVRYD4gWg5JG+V5nS0lw1A01VGT0xLjCtaes4lo8FtUSB0c4OB/VV2Y5cGvVbptSJ4PhKpjSwgggjmCsBe7c621piG8ThqicTzHb3HJXFPxJO8iO5UwY//ADY+R/RT301NfqU0rZQJ2EvgeOXLdp9P9lGepNtOHvMuuTDlCUb2lri13MHBQlS6ApJJIBwi9EIRDmrKtTZJRR2ZzhjMz9Ts9hsFVV7nVT9VXK1kTeTXHH2VfJcpafwoxvHpG3ZMbw1oJbRxPl/zJfOR7BV2jCceW9pMcocfDoaczHq5jcNHuUEzhH/3tUzI/wDFT4Jz6lQJa+sqhoc572f0M2b+g2QRUge4Grlawf0tO6nbaY69us1Y10bm08LWgnOo7k4XEVFQRnV9l0k0CqEUYGgMwMKRTwg5AHJL2rxIjRVrw7S9qJskk79IJ1t7dlKlocu1gct9kMcXhVcMuMNcdLk9J3EOqbgATZaAeYTNo9bdbpwWfcq/uNACwOxnKr4oBSvDXZDXdU+pTOWK5zo2DRA0DqXHdcXSebq5x5k9Vc1Fpnf54tEjHcjjBCiutr4/5uGlRZWmOcQ6bxXStLXCMA/MRnC1tuuccDJGx1LdOdUmR+JIe/qs9JHowxgy4hdYaQxxkkEudspy4+ypy9Ut1dUVdZLVMc+MAaWaXHIHuuD2PkcXvLnu6l25U0w/D0jG43eV3ZCGwveeQblXMJJpjly7rOOYZZHNPJrsEDkF0pbd8WHtMgjcN2FxU6kpiKcOcPM86zn1XOvxBTuLXYOWgenNOY6VeS2+BG2spgG1RIkJGHtOB+vIoy2ppwTHVtLR+WUrm24V8ULfDl8VmN2uAKhuuEL3F09BC5w7F7fsCntExyvtKdcnE4ewZ9FacH3HF8cXnEfgSZ9MDOVQz3F0sZjZFFBH2Y3H35qfBH/DqBwJxVVTdL+8Uf8AT7k8+wGO6y5Luaa8eMl3YjuOTnvuhKI80JTIKSSSAIJwhThWVDMzxI8dRyUHSWHsVZLjPDrGpmzx90CXSH4jyMazhdombZXPDXHB2K60zmxS5eMswQUlVzLjFUh3Y81cUb2/EAdHt2/59VXV0bdpGbg9U9HN/iYz6EIicvMaiCm1xO23HJQKuHEb2dRuFdWuRsjcAYyuNzp8aiWrRy45ay06W7TX2wHbU0bhc6ujYCNYBbhQuH6z4OtMMnyOJWoulI+opAafJ25Z/ZOJy3jkxtRJIx5ipy4N9Cu1NaZHMM9U84xnCurbajq11LPDa07agpVWYzpjBGk890tKvJrxGfpqAyOdM5uGg4b6rrS0wnqDgbDZT6mVj3NpqQZJ7Kd8PHaaB0snznp6plc7pRXHBrooANmD9EV2Pg2aYtOC/wAoUagcaqudM/ckrpxS/ENNDn5nZS/Fee0g3MDYS8DGlgwFSXyRjWNiYSXufk/sFfTYFD7tCzFY8SXJ7+QYNQKnLxGnF5oql5pYooGu/E+aT0PZQnPL3jOXOJwOpXeGknqsyjyxA/zHnAH+/wBFNgZHSZ+Gz4mP5zuY9hvj9/VZ279OjrIekpW0DmzVOHVOMsi6Rnu719OnvyF73PeXvOS45SJQpSC5UxQlOUJTSSSZJAOE6EHCIK00QTocokAEsLJR5tj3HNcDTyM+XD29id1KRBAl0r3a2ZBacHoUNPnxB2CsjgjGEAp2BzpGjDg3kOXMIPs0FnlxpyVc1UXiw52OyzNsfpcA5aeilEkYb+60npxck1WUr4jDOJG7ELW8M3NlRAIZD5x1d1VPe6XZxCpKCtfSVAcDyKV9tNd8XoFx8aPOxLCqP4SWpkwRjfure13mGrp2sqDnPryU8mlp2+JrHcZKGPmItDQU9ugM0rW6ueSN1k+I7vJWT+Gx34bexUniK/eOXRRSYH+lZyEF8oz1KW22GH7V/wAPw4YXuCq71L8RdY252acAK+p8U1EXctll4nePdNXPfOU76HH5yuS9qyGUu4B0jqFRy2ySme2etaGeM3WyE9W93dh6K4rnajG0dXhPxi4m9uZnZsLAPbCy5L5kb8E+FyU8sr5XZftjk3oPYLnlLKRSWZMSnQoBISnJwhJQDJ0KdBnTpklaRp0IToISSZOgHBXSEZ1DuFyUmgbrqNP1ThZeh5MUuBzCvbbOHNbv9Fnqh2JXH1U63TYxurlYZ47m2jqIxNEQRnKxtygdBMdtsrYU0mtoBJKrr1bzJGXs5oyjLiy63VZ2nqHMI0uwu81dO9ml0riPdV7w6KQsenecgaVDr6wLnZdvzKsLTAZZhnfCr42lzxkLTWiDQ0u7J4zdTy5dYK9TiCjLORxhZ+yjVUOf2UniKp1v0dlzsjMNLu6P1OE68e0+qd+NGOzwpXGjdN4a/wDrgYq+pdmVg/1BWHGLtdVRydXUzf3WPJ9434f8qz6ROySZUZZTFJMUjCUxTlCUAySSSAJOkkrSdqdJJBHRBMkgHUm37Tux/QU6Sc9pz+rjP/MXWjcQ4Y7pJJ/qb6aCgc7yjKtAA5nm33SSWkcOXtlb/BGyTLW4KpWnDsJJLPL27+P6ptI0GQZHVaZgEdI4t2KSSrFjzMVcnudUEk9Va2kfhJJKZ7b5/SFVnDwR0cFa8YAD+HEc/h/7pJLHP7xpwf51nUySSZkUBTpIASmSSQZkkkkB/9k=");
    },5000);
}

setTimeout(()=>{
    dom.removeAttribute(img1);
},15000)