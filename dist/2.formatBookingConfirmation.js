"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
const bookingUserDetails = { name: "Aisha", guests: 4, time: "7:00 PM" };
console.log(formatBookingConfirmation(bookingUserDetails));
//# sourceMappingURL=2.formatBookingConfirmation.js.map