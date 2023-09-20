import moment from 'moment';
import {COLORS} from './colors';
import {IMAGES} from './images';

export const requestService = [
  {
    id: '1',
    image: IMAGES.cleaning,
    title: 'Car Spa & \nCleaning',
  },
  {
    id: '2',
    image: IMAGES.tire_wheel,
    title: 'Tire  & \nWheel Care',
  },
  {
    id: '3',
    image: IMAGES.denting_painting,
    title: 'Denting & \nPainting',
  },
];

export const mechanicalRepairs = [
  {
    id: '4',
    image: IMAGES.batteries,
    title: 'Batteries',
  },
  {
    id: '5',
    image: IMAGES.clutch_brakes,
    title: 'Cluch & Brakes',
  },
  {
    id: '6',
    image: IMAGES.windshield_lights,
    title: 'Windshield & \nLights',
  },
];

export const otherService = [
  {
    id: '1',
    image: IMAGES.car_wash,
    title: 'Car Wash & \nLights',
  },
  {
    id: '2',
    image: IMAGES.oiling,
    title: 'Oiling',
  },
  {
    id: '3',
    image: IMAGES.breakdown,
    title: 'Breakdown',
  },
];

export const vehicleList = [
  {
    id: '1',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '2',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '3',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '4',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '5',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '6',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '7',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '8',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '9',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
  {
    id: '10',
    car_name: 'Range Rover',
    vehicle_number: 'MH 04 CD12345',
    registeration_number: 'Reg ID: 1421451223',
    date: '14/03/2023',
    image: IMAGES.range_rover,
  },
];

export const orderReportList = [
  {
    id: 'ID : 93834',
    status: 'In Progress',
    title: 'car Wash',
    sub_title: '23 Feb 2023 , 1am to 2pm',
    background: 'rgba(47, 143, 97, 0.10)',
    color: '#3c8f62',
    wash_number: 'RM 254',
  },
  {
    id: 'ID : 93834',
    status: 'Accept',
    title: 'car Wash',
    sub_title: '23 Feb 2023 , 1am to 2pm',
    background: '#3c8f62',
    color: COLORS.SECONDARY_WHITE,
    wash_number: 'RM 254',
  },
  {
    id: 'ID : 93834',
    status: 'Waiting for Accept',
    title: 'car Wash',
    sub_title: '23 Feb 2023 , 1am to 2pm',
    background: '#cc413f',
    color: COLORS.SECONDARY_WHITE,
    wash_number: 'RM 254',
  },
  {
    id: 'ID : 93834',
    status: 'Delivered',
    title: 'car Wash',
    sub_title: '23 Feb 2023 , 1am to 2pm',
    background: '#3c8f62',
    color: COLORS.SECONDARY_WHITE,
    wash_number: 'RM 254',
  },
];
export const addAddressList = [
  {
    id: '1',
    name: 'Adarsh',
    type: 'Home',
    address: '205, Krishna Business Center, Scheme 54 PU4, Indore, M.P. 452010',
  },
  {
    id: '2',
    name: 'Himanshu',
    type: 'Office',
    address: '205, Krishna Business Center, Scheme 54 PU4, Indore, M.P. 452010',
  },
];

export const afterNoonSlots = [
  {
    id: 0,
    afternoon_time: '12:00 - 01:00 PM ',
    time_in_HH: moment('12:00:00 PM', 'h:mm:ss A').format(),
  },
  {
    id: 1,
    afternoon_time: '01:00 - 02:00 PM ',
    time_in_HH: moment('01:00:00 PM', 'h:mm:ss A').format(),
  },
  {
    id: 2,
    afternoon_time: '02:00 - 03:00 PM ',
    time_in_HH: moment('02:00:00 PM', 'h:mm:ss A').format(),
  },
  {
    id: 3,
    afternoon_time: '03:00 - 04:00 PM ',
    time_in_HH: moment('03:00:00 PM', 'h:mm:ss A').format(),
  },
  {
    id: 4,
    afternoon_time: '04:00 - 05:00 PM ',
    time_in_HH: moment('04:00:00 PM', 'h:mm:ss A').format(),
  },
  {
    id: 5,
    afternoon_time: '05:00 - 06:00 PM ',
    time_in_HH: moment('05:00:00 PM', 'h:mm:ss A').format(),
  },
];
export const eveningSlots = [
  {
    id: 0,
    evening_time: '06:00 - 07:00 PM ',
    time_in_HH: moment('06:00:00 PM', 'h:mm:ss A').format(),
  },
  {
    id: 1,
    evening_time: '07:00 - 08:00 PM ',
    time_in_HH: moment('07:00:00 PM', 'h:mm:ss A').format(),
  },
];
export const morningSlots = [
  {
    id: 0,
    morning_time: '09:00 - 09:30 AM ',
    time_in_HH: moment('09:00:00 Am', 'h:mm:ss A').format(),
  },
  {
    id: 1,
    morning_time: '09:30 - 10:00 AM ',
    time_in_HH: moment('09:30:00 Am', 'h:mm:ss A').format(),
  },
  {
    id: 2,
    morning_time: '10:00 - 10:30 AM ',
    time_in_HH: moment('10:00:00 Am', 'h:mm:ss A').format(),
  },
  {
    id: 3,
    morning_time: '10:30 - 11:00 AM ',
    time_in_HH: moment('10:30:00 Am', 'h:mm:ss A').format(),
  },
  {
    id: 4,
    morning_time: '11:00 - 11:30 AM ',
    time_in_HH: moment('11:00:00 Am', 'h:mm:ss A').format(),
  },
  {
    id: 5,
    morning_time: '11:30 - 12:00 AM ',
    time_in_HH: moment('11:30:00 Am', 'h:mm:ss A').format(),
  },
];
