import { SearchBoxWrapper } from "../Search-Bar/SearchBar";
import { SearchBarMainWrapper } from "../Search-Bar/SearchBar";
import { SelectLocationWrapper } from "../Search-Bar/SearchBar";
import { PickDateWrapper } from "../Search-Bar/SearchBar";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { SelectGuestsWrapper } from "../Search-Bar/SearchBar";
import { Button } from "@material-ui/core";
import GuestCard from "../material-ui-components/GuestCard";
import { Search } from "../Search-Bar/Search";
import calender from "../../Logos/calendar.png";
import placeholder from "../../Logos/placeholder.png";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { PrettoSlider } from "../material-ui-components/LocationCard";
import addgroup from "../../Logos/addgroup.png";
export function FilterSearchBar() {
    const [border, setBorder] = useState(false);
    const [datePicker, setDatePicker] = useState(false);
    const [clickedCheckOut, setClickedCheckOut] = useState(false);
    const [guestSelect, setGuestSelect] = useState(false);
    const [location, setLocation] = useState("");
    const [checkInDate, setCheckInDate] = useState("-- /-- /----");
    const [checkOutDate, setCheckOutDate] = useState("-- /-- /----");
    const [guestNumber, setGuestNumber] = useState(2);
    const [roomsNumber, setRoomsNumber] = useState(1);

    const handleBorder = () => {
        setBorder(true);
        setDatePicker(false);
        setClickedCheckOut(false);
    };

    const handleLocationInput = (e) => {
        e.preventDefault();
        console.log(location);
        setLocation(e.target.value);
    };
    const handleClear = () => {
        setLocation("");
    };
    const handleDatePicker = () => {
        setDatePicker(!datePicker);
        setClickedCheckOut(false);
        setGuestSelect(false);
    };
    const handleClickedCheckOut = () => {
        setClickedCheckOut(!clickedCheckOut);
        setDatePicker(false);
        setGuestSelect(false);
    };
    const handleGuestSelector = () => {
        setDatePicker(false);
        setClickedCheckOut(false);
        setGuestSelect(!guestSelect);
    };
    return (
        <>
            <FilterSearchBarWrapper>
                <SearchBoxWrapper className="search-box-wrapper">
                    <SearchBarMainWrapper className="search-bar-main-wrapper">
                        <SelectLocationWrapper className="select-location-wrapper">
                            <div
                                onClick={handleBorder}
                                className={border ? "dottedBorder" : undefined}
                            >
                                <img src={placeholder} alt="" />{" "}
                                <input
                                    placeholder="Enter a hotel name or destination"
                                    type="text"
                                    value={location}
                                    onChange={handleLocationInput}
                                />
                                <Button
                                    onClick={handleClear}
                                    style={{
                                        maxWidth: "30px",
                                        maxHeight: "30px",
                                        minWidth: "30px",
                                        minHeight: "30px",
                                        top: "4px",
                                    }}
                                >
                                    <ClearIcon />
                                </Button>
                            </div>
                        </SelectLocationWrapper>
                        <PickDateWrapper className="pick-date-wrapper">
                            <div>
                                <div onClick={handleDatePicker} className="checkIndate">
                                    <img src={calender} alt="" />
                                    <div className="date-al date-al-margin">
                                        <span>Check in</span>
                                        <span>{checkInDate}</span>
                                    </div>
                                    {checkInDate !== "-- /-- /----" && (
                                        <div className="arrows-margin">
                                            <ArrowBackIosIcon style={{ cursor: "pointer" }} />
                                            <ArrowForwardIosIcon style={{ cursor: "pointer" }} />
                                        </div>
                                    )}
                                </div>
                                <span className="partitionLine"></span>
                                <div onClick={handleClickedCheckOut} className="checkOutdate">
                                    <div className="date-al date-al-margin">
                                        <span>Check out</span>
                                        <span>{checkOutDate}</span>
                                    </div>
                                    {checkInDate !== "-- /-- /----" && (
                                        <div className="arrows-margin2">
                                            <ArrowBackIosIcon style={{ cursor: "pointer" }} />
                                            <ArrowForwardIosIcon style={{ cursor: "pointer" }} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </PickDateWrapper>
                        <SelectGuestsWrapper>
                            <div>
                                <div onClick={handleGuestSelector} className="guestsnumber">
                                    <img src={addgroup} alt="" />
                                    <div className="guest-al">
                                        <span>{roomsNumber} Room</span>
                                        <span>{guestNumber} Guests</span>
                                    </div>
                                </div>
                                <button>Search</button>
                            </div>
                        </SelectGuestsWrapper>
                    </SearchBarMainWrapper>
                </SearchBoxWrapper>
                {datePicker && (
                    <Search
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                    />
                )}
                {clickedCheckOut && (
                    <Search
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                    />
                )}
                {guestSelect && (
                    <GuestCard
                        setGuestNumber={setGuestNumber}
                        setRoomsNumber={setRoomsNumber}
                    />
                )}
                <FilterHotelsWrapper>
                    <PriceNightWrapper>
                        <div className="priceNightText">
                            <div><span>Price/Night</span></div>
                            <div><span>23234</span></div>
                        </div>
                        <div className="priceNightSlider">  <PrettoSlider min={2200} step={100} max={44000} aria-label="pretto slider" defaultValue={14100} /></div>
                    </PriceNightWrapper>
                    <PropertyTypeWrapper>
                        <div className="propertyTypeText">
                            <span>Property Type</span>
                        </div>
                        <div className="propertyTypeCategories">
                            <div>All</div>
                            <div>Hotel</div>
                            <div>House/Apartment</div>
                        </div>
                    </PropertyTypeWrapper>
                    <GuestRatingWrapper>
                        <div><span>Guest Rating</span></div>
                        <div className="downTextandArrow"><span>All</span><KeyboardArrowDownIcon /></div>
                    </GuestRatingWrapper>
                    <LocationFilteringWrapper>
                        <div><span>Location</span></div>
                        <div className="downTextandArrow"><span>City Center</span><KeyboardArrowDownIcon /></div>
                    </LocationFilteringWrapper>
                    <MoreFilteringWrapper>
                        <div><span>More filters</span></div>
                        <div className="downTextandArrow"><span>Select</span><KeyboardArrowDownIcon /></div>
                    </MoreFilteringWrapper>
                </FilterHotelsWrapper>
            </FilterSearchBarWrapper>
        </>
    );
}

export const FilterSearchBarWrapper = styled.div`
  width: 100%;
  padding: 2rem 26rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  .search-box-wrapper {
    height: 4rem !important;
    box-shadow: none !important;
    .select-location-wrapper {
      border: 1px solid rgb(205, 208, 210);
      position: relative;
      left: -2rem;
      border-radius: 1rem;
      & > div {
        img {
          top: 11px;
        }
        input {
          top: 6px;
        }
      }
    }

    .pick-date-wrapper {
      border: 1px solid rgb(205, 208, 210) !important;
      position: relative;
      left: -1rem !important;
      border-radius: 1rem;
      .checkIndate,
      .checkOutdate {
        top: 0px;
      }
    }

    .guestsnumber {
      border: 1px solid rgb(205, 208, 210);
      height: 100%;
      left: -1rem;
      position: relative;
      border-radius: 1rem;
      padding-left: 9px;
      padding-top: 4px;
    }
  }
`;
const FilterHotelsWrapper = styled.div`
display: grid;
grid-template-columns: 3fr 3fr 1fr 1fr 1fr;
grid-gap:1rem;
border: 1px solid red;
font-size: 13px;
font-weight: bold;
padding: 1rem;

`
const PriceNightWrapper = styled.div`
display: grid;
border-right: 1px solid;
padding-right:2rem;
.priceNightText{
    display: grid;
    grid-template-columns: 1fr 1fr;
    &>div:nth-child(1){
        text-align: start;
    }
     &>div:nth-child(2){
        text-align: end;
    }
}
.priceNightSlider{
.MuiSlider-root {
    color:rgb(63,159,193);
    width: 100%;
    cursor: pointer;
    height: 2px;
    display: inline-block;
    padding: 13px 0;
    position: relative;
    box-sizing: content-box;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
}
}

`

const PropertyTypeWrapper = styled.div`
display: grid;
padding:0 1rem ;
border-right: 1px solid rgb(205, 208, 210);
}
.propertyTypeText{
    text-align: start;
}
.propertyTypeCategories{
    display: grid;
    grid-template-columns: 2fr 2fr 3fr;
    justify-content:center;
     border: 1px solid rgb(205, 208, 210);
    padding: 5px;
    border-radius: 0.7rem;

    &>div{
       
        text-align: center;
        border-radius: 5px;
        :hover{
            background-color:rgb(191,223,234);
        }
    }
     &>div:nth-child(2){
         border-left: 1px solid rgb(205, 208, 210);
     }
     &>div:nth-child(3){
         border-left: 1px solid rgb(205, 208, 210);
     }


`
const GuestRatingWrapper = styled.div`
display: grid;
padding-left:4px;
.downTextandArrow{
    display: grid;

    grid-template-columns: 2fr 1fr;
}
:hover{
   background-color: rgb(235,236,237);
}



`
const LocationFilteringWrapper = styled.div`
display: grid;
padding-left:4px;
.downTextandArrow{
    display: grid;
    grid-template-columns: 2fr 1fr;
}
:hover{
   background-color: rgb(235,236,237);
}


`
const MoreFilteringWrapper = styled.div`
display: grid;
padding-left:4px;
.downTextandArrow{
    display: grid;
    grid-template-columns: 2fr 1fr;
}
:hover{
   background-color: rgb(235,236,237);
}


`