function testGS(){
    const url ="https://script.googleusercontent.com/macros/echo?user_content_key=TvOJUy0GNhBVsHh4b8M2-ARdjsnWxQpjB9b9VmMPN5bR7mHYmklQ8QY7hcU4qUdKA4PPV_y5d0uQItg-iDEEpzdRv6eguRnfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIKd8Ajr-QJiXtrivI6Z1rOZR6QBC5HZSLZ9UOCSCC3FEEGocuRfU6J9qH6ZW0oL0BdMmPI1XI8FKTzEQbFQe0FAi4MT9UDSbA&lib=Mbcn9RcxTPUlmi7Z2ratK58ROYYGn9J7d";

    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    })
}

document.getElementById("btn").addEventListener("click",testGS);
