import React, { useRef } from "react"

export function BookingForm({ partner }) {
    const checkinInput = useRef("");
    const checkOutInput = useRef("");
    const noOfPaxInput = useRef(0);

    const handleOnBlur = () => {
        const checkIn = checkinInput.current.value
        checkOutInput.current.value = checkIn
    }

    const handleOnBook = (e) => {
        e.preventDefault();
        const checkIn = checkinInput.current.value
        const checkOut = checkOutInput.current.value
        const noOfpax = noOfPaxInput.current.value

        let url = ""

        if (partner.includes("airbnb")) {
            url = `${partner}?check_in=${checkIn}&check_out=${checkOut}&guests=${noOfpax}&adults=${noOfpax}`
        }

        if (partner.includes("agoda")) {
            if (partner.includes("35077109")) {
                url = `https://www.agoda.com/search?checkIn=${checkIn}&checkOut=${checkOut}&guests=${noOfpax}&adults=${noOfpax}&rooms=1&selectedproperty=35077109&aid=178961&city=717445`
            } else {
                url = `https://www.agoda.com/search?checkIn=${checkIn}&checkOut=${checkOut}&guests=${noOfpax}&adults=${noOfpax}&rooms=1&selectedproperty=42077085&aid=178961&city=717445`
            }

        }

        if (partner.includes("booking.com")) {
            url = `https://www.booking.com/searchresults.en-gb.html?ss=Pañge&ssne=Pañge&ssne_untouched=Pañge&highlighted_hotels=9057589&aid=304142&checkin=${checkIn}&checkout=${checkOut}&group_adults=${noOfpax}&no_rooms=1`
        }

        console.log(url)
        window.open(url, "_blank")

    }

    return (
        <div id="form" className="form" popover="">
            <label>Check-in</label>
            <input type="date" name="checkin" ref={checkinInput} onBlur={handleOnBlur} />
            <label>Checkout</label>
            <input type="date" name="checkout" ref={checkOutInput} />
            <input type="number" placeholder="No. of pax" name="noofpax" ref={noOfPaxInput} />

            <a
                href="#"
                target="blank"
                onClick={handleOnBook}
            >
                Book
            </a>
        </div>
    )
}