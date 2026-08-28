"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time} PM.`;
}
const bookingUserDetails = { name: "Aisha", guests: 4, time: "7:00 PM" };
console.log(formatBookingConfirmation(bookingUserDetails));
// { name: "Aisha", guests: 4, time: "7:00 PM" }
// "Aisha's table for 4 guests is confirmed at 7:00 PM."
//# sourceMappingURL=2.formatBookingConfirmation.js.map