// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

setInterval(() => {
    const currentDate = new Date();
    const dob = new Date(2024, 10 - 1, 3);

    // Tính khoảng cách giữa hai ngày (mili giây)
    let diffInMs = Math.abs(dob - currentDate);

    // Chuyển đổi mili giây thành số ngày, giờ, phút
    let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    let diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    let diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / (1000));

    $("#countDate").text(`${diffInDays} ngày ${diffInHours} giờ ${diffInMinutes} phút ${diffInSeconds} giây`);
}, 1000);