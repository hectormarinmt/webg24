const urlApex = "https://g4ae9dee87ff1a1-dbg24.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/grupo1/reto1"

function peticionGet() {
    $.ajax({
        url: urlApex,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let numreg = data.count
            let productos = data.items
            console.log(numreg)
            console.log(productos)
            console.log("**********************")
            for (i = 0; i < numreg; i++) {
                console.log("Producto " + (i + 1))
                console.log("Codigo " + productos[i].codprod)
                console.log("Nombre " + productos[i].nomprod)
                console.log("Precio " + productos[i].precio)
                console.log("Inventario " + productos[i].inventario)
            }
        },
        error: function () {

        },
        complete: function () {

        }

    });
}
function peticionPost(codprode, nomprode, precioe, inventarioe) {
    const dataSend = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe

    }

    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'POST',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function (response) {
            if (response.status == 201) {
                alert("Guardó con exito!!")

            }
            console.log(response.status)
        }

    });

    console.log(json)
}


function peticionPut(codprode, nomprode, precioe, inventarioe) {
    const dataSend = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe

    }

    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'PUT',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function (response) {

            if (response.status == 201) {
                alert("Actualizó con exito!!")

            }

            console.log(response.status)
        }

    });

    console.log(json)

}

function peticionDelete(codprode) {
    const dataSend = {
        codprod: codprode,
    }

    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'DELETE',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function (response) {

            if (response.status == 204) {
                alert("Eliminó con exito!!")

            }

            console.log(response.status)
        }

    });

    console.log(json)

}
