import {useState,useEffect,memo} from 'react'

//react-bootstrap
import { Navbar,Container, Nav, Dropdown, Form, Image, Button,Collapse} from 'react-bootstrap'

//router
import { Link,useLocation } from 'react-router-dom'

//component
import CustomToggle from "../../../Dropdown";
import Card from "../../../Card";

//img
import img1 from "../../../../assets/images/shapes/01.png";
import img2 from "../../../../assets/images/shapes/02.png";
import img3 from "../../../../assets/images/shapes/03.png";
import img4 from "../../../../assets/images/shapes/04.png";

// logo
import Logo from '../../components/logo'

// Redux Selector / Action
import { useSelector } from 'react-redux';


// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

import IHeader from '../interface';
export type {
  IHeader // Use 'export type' to re-export the type
};
export {
    useState,
    useEffect,
    memo,
    Navbar,
    Container,
    Nav,
    Dropdown,
    Form,
    Image,
    Button,
    Collapse,
    Link,
    useLocation,
    CustomToggle,
    Card,
    img1,
    img2,
    img3,
    img4,
    Logo,
    useSelector,
    SettingSelector,
};
