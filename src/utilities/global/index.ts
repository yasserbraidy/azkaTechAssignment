import ICountry from "../../services/entities/country";
// import countries from "../../assets/flags/flags.json";
import Swal from "sweetalert2";
import IApiResponse from "../../services/api/response";
import { IFetchingErrorAlert, IValidationErrorAlert } from "../../components/Error/interface";

export function capitalizeWords(inputString: string) {
    return inputString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function truncateName (name: string, maxLength: number) {
    if (name.length > maxLength) {
        return name.slice(0, maxLength - 3) + "...";
    }
    return name;
};

export function formatDate(inputDateString: string) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const inputDate = new Date(inputDateString);
    const dayOfWeek = daysOfWeek[inputDate.getUTCDay()];
    const month = monthsOfYear[inputDate.getUTCMonth()];
    const day = inputDate.getUTCDate();
    const year = inputDate.getUTCFullYear();

    const formattedDateString = `${dayOfWeek}, ${month} ${day}, ${year}`;
    return formattedDateString;
}

export function convertDateToYYYYMMDD(dateStr: string) {
    const inputDate = new Date(dateStr);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// const allCountries: Array<Partial<ICountry>> = [
//     { name: "Afghanistan", alpha_2_code: "AF", alpha_3_code: "AFG", code: "93", flag: countries.af },
//     { name: "Albania", alpha_2_code: "AL", alpha_3_code: "ALB", code: "355", flag: countries.al },
//     { name: "Algeria", alpha_2_code: "DZ", alpha_3_code: "DZA", code: "012", flag: countries.dz },
//     { name: "American Samoa", alpha_2_code: "AS", alpha_3_code: "ASM", code: "016", flag: countries.dz },
//     { name: "Andorra", alpha_2_code: "AD", alpha_3_code: "AND", code: "020", flag: countries.ad },
//     { name: "Angola", alpha_2_code: "AO", alpha_3_code: "AGO", code: "024", flag: countries.ao },
//     { name: "Anguilla", alpha_2_code: "AI", alpha_3_code: "AIA", code: "660", flag: countries.ai },
//     { name: "Antarctica", alpha_2_code: "AQ", alpha_3_code: "ATA", code: "010", flag: countries.aq },
//     { name: "Antigua and Barbuda", alpha_2_code: "AG", alpha_3_code: "ATG", code: "028", flag: countries.ag },
//     { name: "Argentina", alpha_2_code: "AR", alpha_3_code: "ARG", code: "032", flag: countries.ar },
//     { name: "Armenia", alpha_2_code: "AM", alpha_3_code: "ARM", code: "051", flag: countries.am },
//     { name: "Aruba", alpha_2_code: "AW", alpha_3_code: "ABW", code: "533", flag: countries.am },
//     { name: "Australia", alpha_2_code: "AU", alpha_3_code: "AUS", code: "036", flag: countries.au },
//     { name: "Austria", alpha_2_code: "AT", alpha_3_code: "AUT", code: "040", flag: countries.at },
//     { name: "Azerbaijan", alpha_2_code: "AZ", alpha_3_code: "AZE", code: "031", flag: countries.az },
//     { name: "Bahamas", alpha_2_code: "BS", alpha_3_code: "BHS", code: "044", flag: countries.bs },
//     { name: "Bahrain", alpha_2_code: "BH", alpha_3_code: "BHR", code: "048", flag: countries.bh },
//     { name: "Bangladesh", alpha_2_code: "BD", alpha_3_code: "BGD", code: "050", flag: countries.bd },
//     { name: "Barbados", alpha_2_code: "BB", alpha_3_code: "BRB", code: "052", flag: countries.bb },
//     { name: "Belarus", alpha_2_code: "BY", alpha_3_code: "BLR", code: "112", flag: countries.by },
//     { name: "Belgium", alpha_2_code: "BE", alpha_3_code: "BEL", code: "056", flag: countries.be },
//     { name: "Belize", alpha_2_code: "BZ", alpha_3_code: "BLZ", code: "084", flag: countries.bz },
//     { name: "Benin", alpha_2_code: "BJ", alpha_3_code: "BEN", code: "204", flag: countries.bj },
//     { name: "Bermuda", alpha_2_code: "BM", alpha_3_code: "BMU", code: "060", flag: countries.bm },
//     { name: "Bhutan", alpha_2_code: "BT", alpha_3_code: "BTN", code: "064", flag: countries.bt },
//     { name: "Bolivia", alpha_2_code: "BO", alpha_3_code: "BOL", code: "068", flag: countries.bo },
//     { name: "Bonaire, Sint Eustatius and Saba", alpha_2_code: "BQ", alpha_3_code: "BES", code: "535", flag: countries.bq },
//     { name: "Bosnia and Herzegovina", alpha_2_code: "BA", alpha_3_code: "BIH", code: "070", flag: countries.ba },
//     { name: "Botswana", alpha_2_code: "BW", alpha_3_code: "BWA", code: "072", flag: countries.bw },
//     { name: "Bouvet Island", alpha_2_code: "BV", alpha_3_code: "BVT", code: "074", flag: countries.bv },
//     { name: "Brazil", alpha_2_code: "BR", alpha_3_code: "BRA", code: "076", flag: countries.br },
//     { name: "British Indian Ocean Territory", alpha_2_code: "IO", alpha_3_code: "IOT", code: "086", flag: countries.io },
//     { name: "Brunei Darussalam", alpha_2_code: "BN", alpha_3_code: "BRN", code: "096", flag: countries.bn },
//     { name: "Bulgaria", alpha_2_code: "BG", alpha_3_code: "BGR", code: "100", flag: countries.bg },
//     { name: "Burkina Faso", alpha_2_code: "BF", alpha_3_code: "BFA", code: "854", flag: countries.bf },
//     { name: "Burundi", alpha_2_code: "BI", alpha_3_code: "BDI", code: "108", flag: countries.bi },
//     { name: "Cabo Verde", alpha_2_code: "CV", alpha_3_code: "CPV", code: "132", flag: countries.cv },
//     { name: "Cambodia", alpha_2_code: "KH", alpha_3_code: "KHM", code: "116", flag: countries.kh },
//     { name: "Cameroon", alpha_2_code: "CM", alpha_3_code: "CMR", code: "120", flag: countries.cm },
//     { name: "Canada", alpha_2_code: "CA", alpha_3_code: "CAN", code: "124", flag: countries.ca },
//     { name: "Cayman Islands", alpha_2_code: "KY", alpha_3_code: "CYM", code: "136", flag: countries.ky },
//     { name: "Central African Republic", alpha_2_code: "CF", alpha_3_code: "CAF", code: "140", flag: countries.cf },
//     { name: "Chad", alpha_2_code: "TD", alpha_3_code: "TCD", code: "148", flag: countries.td },
//     { name: "Chile", alpha_2_code: "CL", alpha_3_code: "CHL", code: "152", flag: countries.cl },
//     { name: "China", alpha_2_code: "CN", alpha_3_code: "CHN", code: "156", flag: countries.cn },
//     { name: "Christmas Island", alpha_2_code: "CX", alpha_3_code: "CXR", code: "162", flag: countries.cx },
//     { name: "Cocos (Keeling) Islands", alpha_2_code: "CC", alpha_3_code: "CCK", code: "166", flag: countries.cc },
//     { name: "Colombia", alpha_2_code: "CO", alpha_3_code: "COL", code: "170", flag: countries.co },
//     { name: "Comoros", alpha_2_code: "KM", alpha_3_code: "COM", code: "174", flag: countries.km },
//     { name: "Congo (DR)", alpha_2_code: "CD", alpha_3_code: "COD", code: "180", flag: countries.cd },
//     { name: "Congo", alpha_2_code: "CG", alpha_3_code: "COG", code: "178", flag: countries.cg },
//     { name: "Cook Islands", alpha_2_code: "CK", alpha_3_code: "COK", code: "184", flag: countries.ck },
//     { name: "Costa Rica", alpha_2_code: "CR", alpha_3_code: "CRI", code: "188", flag: countries.cr },
//     { name: "Croatia", alpha_2_code: "HR", alpha_3_code: "HRV", code: "191", flag: countries.hr },
//     { name: "Cuba", alpha_2_code: "CU", alpha_3_code: "CUB", code: "192", flag: countries.cu },
//     { name: "Curaçao", alpha_2_code: "CW", alpha_3_code: "CUW", code: "531", flag: countries.cw },
//     { name: "Cyprus", alpha_2_code: "CY", alpha_3_code: "CYP", code: "196", flag: countries.cy },
//     { name: "Czechia", alpha_2_code: "CZ", alpha_3_code: "CZE", code: "203", flag: countries.cz },
//     { name: "Côte d'Ivoire", alpha_2_code: "CI", alpha_3_code: "CIV", code: "384", flag: countries.ci },
//     { name: "Denmark", alpha_2_code: "DK", alpha_3_code: "DNK", code: "208", flag: countries.dk },
//     { name: "Djibouti", alpha_2_code: "DJ", alpha_3_code: "DJI", code: "262", flag: countries.dj },
//     { name: "Dominica", alpha_2_code: "DM", alpha_3_code: "DMA", code: "212", flag: countries.dm },
//     { name: "Dominican Republic", alpha_2_code: "DO", alpha_3_code: "DOM", code: "214", flag: countries.do },
//     { name: "Ecuador", alpha_2_code: "EC", alpha_3_code: "ECU", code: "218", flag: countries.ec },
//     { name: "Egypt", alpha_2_code: "EG", alpha_3_code: "EGY", code: "818", flag: countries.eg },
//     { name: "El Salvador", alpha_2_code: "SV", alpha_3_code: "SLV", code: "222", flag: countries.sv },
//     { name: "Equatorial Guinea", alpha_2_code: "GQ", alpha_3_code: "GNQ", code: "226", flag: countries.gq },
//     { name: "Eritrea", alpha_2_code: "ER", alpha_3_code: "ERI", code: "232", flag: countries.er },
//     { name: "Estonia", alpha_2_code: "EE", alpha_3_code: "EST", code: "233", flag: countries.ee },
//     { name: "Eswatini", alpha_2_code: "SZ", alpha_3_code: "SWZ", code: "748", flag: countries.sz },
//     { name: "Ethiopia", alpha_2_code: "ET", alpha_3_code: "ETH", code: "231", flag: countries.et },
//     { name: "Falkland Islands", alpha_2_code: "FK", alpha_3_code: "FLK", code: "238", flag: countries.fk },
//     { name: "Faroe Islands", alpha_2_code: "FO", alpha_3_code: "FRO", code: "234", flag: countries.fo },
//     { name: "Fiji", alpha_2_code: "FJ", alpha_3_code: "FJI", code: "242", flag: countries.fj },
//     { name: "Finland", alpha_2_code: "FI", alpha_3_code: "FIN", code: "246", flag: countries.fi },
//     { name: "France", alpha_2_code: "FR", alpha_3_code: "FRA", code: "250", flag: countries.fr },
//     { name: "French Guiana", alpha_2_code: "GF", alpha_3_code: "GUF", code: "254", flag: countries.gf },
//     { name: "French Polynesia", alpha_2_code: "PF", alpha_3_code: "PYF", code: "258", flag: countries.pf },
//     { name: "French Southern Territories", alpha_2_code: "TF", alpha_3_code: "ATF", code: "260", flag: countries.tf },
//     { name: "Gabon", alpha_2_code: "GA", alpha_3_code: "GAB", code: "266", flag: countries.ga },
//     { name: "Gambia", alpha_2_code: "GM", alpha_3_code: "GMB", code: "270", flag: countries.gm },
//     { name: "Georgia", alpha_2_code: "GE", alpha_3_code: "GEO", code: "268", flag: countries.ge },
//     { name: "Germany", alpha_2_code: "DE", alpha_3_code: "DEU", code: "276", flag: countries.de },
//     { name: "Ghana", alpha_2_code: "GH", alpha_3_code: "GHA", code: "288", flag: countries.gh },
//     { name: "Gibraltar", alpha_2_code: "GI", alpha_3_code: "GIB", code: "292", flag: countries.gi },
//     { name: "Greece", alpha_2_code: "GR", alpha_3_code: "GRC", code: "300", flag: countries.gr },
//     { name: "Greenland", alpha_2_code: "GL", alpha_3_code: "GRL", code: "304", flag: countries.gl },
//     { name: "Grenada", alpha_2_code: "GD", alpha_3_code: "GRD", code: "308", flag: countries.gd },
//     { name: "Guadeloupe", alpha_2_code: "GP", alpha_3_code: "GLP", code: "312", flag: countries.gp },
//     { name: "Guam", alpha_2_code: "GU", alpha_3_code: "GUM", code: "316", flag: countries.gu },
//     { name: "Guatemala", alpha_2_code: "GT", alpha_3_code: "GTM", code: "320", flag: countries.gt },
//     { name: "Guernsey", alpha_2_code: "GG", alpha_3_code: "GGY", code: "831", flag: countries.gg },
//     { name: "Guinea", alpha_2_code: "GN", alpha_3_code: "GIN", code: "324", flag: countries.gn },
//     { name: "Guinea-Bissau", alpha_2_code: "GW", alpha_3_code: "GNB", code: "624", flag: countries.gw },
//     { name: "Guyana", alpha_2_code: "GY", alpha_3_code: "GUY", code: "328", flag: countries.gy },
//     { name: "Haiti", alpha_2_code: "HT", alpha_3_code: "HTI", code: "332", flag: countries.ht },
//     { name: "Heard Island and McDonald Islands", alpha_2_code: "HM", alpha_3_code: "HMD", code: "334", flag: countries.hm },
//     { name: "Holy See", alpha_2_code: "VA", alpha_3_code: "VAT", code: "336", flag: countries.va },
//     { name: "Honduras", alpha_2_code: "HN", alpha_3_code: "HND", code: "340", flag: countries.hn },
//     { name: "Hong Kong", alpha_2_code: "HK", alpha_3_code: "HKG", code: "344", flag: countries.hk },
//     { name: "Hungary", alpha_2_code: "HU", alpha_3_code: "HUN", code: "348", flag: countries.hu },
//     { name: "Iceland", alpha_2_code: "IS", alpha_3_code: "ISL", code: "352", flag: countries.is },
//     { name: "India", alpha_2_code: "IN", alpha_3_code: "IND", code: "356", flag: countries.in },
//     { name: "Indonesia", alpha_2_code: "ID", alpha_3_code: "IDN", code: "360", flag: countries.id },
//     { name: "Iran (Islamic Republic of)", alpha_2_code: "IR", alpha_3_code: "IRN", code: "364", flag: countries.ir },
//     { name: "Iraq", alpha_2_code: "IQ", alpha_3_code: "IRQ", code: "368", flag: countries.iq },
//     { name: "Ireland", alpha_2_code: "IE", alpha_3_code: "IRL", code: "372", flag: countries.ie },
//     { name: "Isle of Man", alpha_2_code: "IM", alpha_3_code: "IMN", code: "833", flag: countries.im },
//     { name: "Israel", alpha_2_code: "IL", alpha_3_code: "ISR", code: "376", flag: countries.il },
//     { name: "Italy", alpha_2_code: "IT", alpha_3_code: "ITA", code: "380", flag: countries.it },
//     { name: "Jamaica", alpha_2_code: "JM", alpha_3_code: "JAM", code: "388", flag: countries.jm },
//     { name: "Japan", alpha_2_code: "JP", alpha_3_code: "JPN", code: "392", flag: countries.jp },
//     { name: "Jersey", alpha_2_code: "JE", alpha_3_code: "JEY", code: "832", flag: countries.je },
//     { name: "Jordan", alpha_2_code: "JO", alpha_3_code: "JOR", code: "400", flag: countries.jo },
//     { name: "Kazakhstan", alpha_2_code: "KZ", alpha_3_code: "KAZ", code: "398", flag: countries.kz },
//     { name: "Kenya", alpha_2_code: "KE", alpha_3_code: "KEN", code: "404", flag: countries.ke },
//     { name: "Kiribati", alpha_2_code: "KI", alpha_3_code: "KIR", code: "296", flag: countries.ki },
//     { name: "Korea (North)", alpha_2_code: "KP", alpha_3_code: "PRK", code: "408", flag: countries.kp },
//     { name: "Korea (South)", alpha_2_code: "KR", alpha_3_code: "KOR", code: "410", flag: countries.kr },
//     { name: "Kuwait", alpha_2_code: "KW", alpha_3_code: "KWT", code: "414", flag: countries.kw },
//     { name: "Kyrgyzstan", alpha_2_code: "KG", alpha_3_code: "KGZ", code: "417", flag: countries.kg },
//     { name: "Lao People's Democratic Republic", alpha_2_code: "LA", alpha_3_code: "LAO", code: "418", flag: countries.la },
//     { name: "Latvia", alpha_2_code: "LV", alpha_3_code: "LVA", code: "428", flag: countries.lv },
//     { name: "Lebanon", alpha_2_code: "LB", alpha_3_code: "LBN", code: "422", flag: countries.lb },
//     { name: "Lesotho", alpha_2_code: "LS", alpha_3_code: "LSO", code: "426", flag: countries.ls },
//     { name: "Liberia", alpha_2_code: "LR", alpha_3_code: "LBR", code: "430", flag: countries.lr },
//     { name: "Libya", alpha_2_code: "LY", alpha_3_code: "LBY", code: "434", flag: countries.ly },
//     { name: "Liechtenstein", alpha_2_code: "LI", alpha_3_code: "LIE", code: "438", flag: countries.li },
//     { name: "Lithuania", alpha_2_code: "LT", alpha_3_code: "LTU", code: "440", flag: countries.lt },
//     { name: "Luxembourg", alpha_2_code: "LU", alpha_3_code: "LUX", code: "442", flag: countries.lu },
//     { name: "Macao", alpha_2_code: "MO", alpha_3_code: "MAC", code: "446", flag: countries.mo },
//     { name: "Macedonia (North)", alpha_2_code: "MK", alpha_3_code: "MKD", code: "807", flag: countries.mk },
//     { name: "Madagascar", alpha_2_code: "MG", alpha_3_code: "MDG", code: "450", flag: countries.mg },
//     { name: "Malawi", alpha_2_code: "MW", alpha_3_code: "MWI", code: "454", flag: countries.mw },
//     { name: "Malaysia", alpha_2_code: "MY", alpha_3_code: "MYS", code: "458", flag: countries.my },
//     { name: "Maldives", alpha_2_code: "MV", alpha_3_code: "MDV", code: "462", flag: countries.mv },
//     { name: "Mali", alpha_2_code: "ML", alpha_3_code: "MLI", code: "466", flag: countries.ml },
//     { name: "Malta", alpha_2_code: "MT", alpha_3_code: "MLT", code: "470", flag: countries.mt },
//     { name: "Marshall Islands", alpha_2_code: "MH", alpha_3_code: "MHL", code: "584", flag: countries.mh },
//     { name: "Martinique", alpha_2_code: "MQ", alpha_3_code: "MTQ", code: "474", flag: countries.mq },
//     { name: "Mauritania", alpha_2_code: "MR", alpha_3_code: "MRT", code: "478", flag: countries.mr },
//     { name: "Mauritius", alpha_2_code: "MU", alpha_3_code: "MUS", code: "480", flag: countries.mu },
//     { name: "Mayotte", alpha_2_code: "YT", alpha_3_code: "MYT", code: "175", flag: countries.yt },
//     { name: "Mexico", alpha_2_code: "MX", alpha_3_code: "MEX", code: "484", flag: countries.mx },
//     { name: "Micronesia", alpha_2_code: "FM", alpha_3_code: "FSM", code: "583", flag: countries.fm },
//     { name: "Moldova", alpha_2_code: "MD", alpha_3_code: "MDA", code: "498", flag: countries.md },
//     { name: "Monaco", alpha_2_code: "MC", alpha_3_code: "MCO", code: "492", flag: countries.mc },
//     { name: "Mongolia", alpha_2_code: "MN", alpha_3_code: "MNG", code: "496", flag: countries.mn },
//     { name: "Montenegro", alpha_2_code: "ME", alpha_3_code: "MNE", code: "499", flag: countries.me },
//     { name: "Montserrat", alpha_2_code: "MS", alpha_3_code: "MSR", code: "500", flag: countries.ms },
//     { name: "Morocco", alpha_2_code: "MA", alpha_3_code: "MAR", code: "504", flag: countries.ma },
//     { name: "Mozambique", alpha_2_code: "MZ", alpha_3_code: "MOZ", code: "508", flag: countries.mz },
//     { name: "Myanmar", alpha_2_code: "MM", alpha_3_code: "MMR", code: "104", flag: countries.mm },
//     { name: "Namibia", alpha_2_code: "NA", alpha_3_code: "NAM", code: "516", flag: countries.na },
//     { name: "Nauru", alpha_2_code: "NR", alpha_3_code: "NRU", code: "520", flag: countries.nr },
//     { name: "Nepal", alpha_2_code: "NP", alpha_3_code: "NPL", code: "524", flag: countries.np },
//     { name: "Netherlands", alpha_2_code: "NL", alpha_3_code: "NLD", code: "528", flag: countries.nl },
//     { name: "New Caledonia", alpha_2_code: "NC", alpha_3_code: "NCL", code: "540", flag: countries.nc },
//     { name: "New Zealand", alpha_2_code: "NZ", alpha_3_code: "NZL", code: "554", flag: countries.nz },
//     { name: "Nicaragua", alpha_2_code: "NI", alpha_3_code: "NIC", code: "558", flag: countries.ni },
//     { name: "Niger", alpha_2_code: "NE", alpha_3_code: "NER", code: "562", flag: countries.ne },
//     { name: "Nigeria", alpha_2_code: "NG", alpha_3_code: "NGA", code: "566", flag: countries.ng },
//     { name: "Niue", alpha_2_code: "NU", alpha_3_code: "NIU", code: "570", flag: countries.nu },
//     { name: "Norfolk Island", alpha_2_code: "NF", alpha_3_code: "NFK", code: "574", flag: countries.nf },
//     { name: "Northern Mariana Islands", alpha_2_code: "MP", alpha_3_code: "MNP", code: "580", flag: countries.mp },
//     { name: "Norway", alpha_2_code: "NO", alpha_3_code: "NOR", code: "578", flag: countries.no },
//     { name: "Oman", alpha_2_code: "OM", alpha_3_code: "OMN", code: "512", flag: countries.om },
//     { name: "Pakistan", alpha_2_code: "PK", alpha_3_code: "PAK", code: "586", flag: countries.pk },
//     { name: "Palau", alpha_2_code: "PW", alpha_3_code: "PLW", code: "585", flag: countries.pw },
//     { name: "Palestine", alpha_2_code: "PS", alpha_3_code: "PSE", code: "275", flag: countries.ps },
//     { name: "Panama", alpha_2_code: "PA", alpha_3_code: "PAN", code: "591", flag: countries.pa },
//     { name: "Papua New Guinea", alpha_2_code: "PG", alpha_3_code: "PNG", code: "598", flag: countries.pg },
//     { name: "Paraguay", alpha_2_code: "PY", alpha_3_code: "PRY", code: "600", flag: countries.py },
//     { name: "Peru", alpha_2_code: "PE", alpha_3_code: "PER", code: "604", flag: countries.pe },
//     { name: "Philippines", alpha_2_code: "PH", alpha_3_code: "PHL", code: "608", flag: countries.ph },
//     { name: "Pitcairn", alpha_2_code: "PN", alpha_3_code: "PCN", code: "612", flag: countries.pn },
//     { name: "Poland", alpha_2_code: "PL", alpha_3_code: "POL", code: "616", flag: countries.pl },
//     { name: "Portugal", alpha_2_code: "PT", alpha_3_code: "PRT", code: "620", flag: countries.pt },
//     { name: "Puerto Rico", alpha_2_code: "PR", alpha_3_code: "PRI", code: "630", flag: countries.pr },
//     { name: "Qatar", alpha_2_code: "QA", alpha_3_code: "QAT", code: "634", flag: countries.qa },
//     { name: "Republic of North Macedonia", alpha_2_code: "MK", alpha_3_code: "MKD", code: "807", flag: countries.mk },
//     { name: "Romania", alpha_2_code: "RO", alpha_3_code: "ROU", code: "642", flag: countries.ro },
//     { name: "Russia", alpha_2_code: "RU", alpha_3_code: "RUS", code: "643", flag: countries.ru },
//     { name: "Rwanda", alpha_2_code: "RW", alpha_3_code: "RWA", code: "646", flag: countries.rw },
//     { name: "Réunion", alpha_2_code: "RE", alpha_3_code: "REU", code: "638", flag: countries.re },
//     { name: "Saint Barthélemy", alpha_2_code: "BL", alpha_3_code: "BLM", code: "652", flag: countries.bl },
//     { name: "Saint Helena, Ascension and Tristan da Cunha", alpha_2_code: "SH", alpha_3_code: "SHN", code: "654", flag: countries.sh },
//     { name: "Saint Kitts and Nevis", alpha_2_code: "KN", alpha_3_code: "KNA", code: "659", flag: countries.kn },
//     { name: "Saint Lucia", alpha_2_code: "LC", alpha_3_code: "LCA", code: "662", flag: countries.lc },
//     { name: "Saint Martin (French part)", alpha_2_code: "MF", alpha_3_code: "MAF", code: "663", flag: countries.mf },
//     { name: "Saint Pierre and Miquelon", alpha_2_code: "PM", alpha_3_code: "SPM", code: "666", flag: countries.pm },
//     { name: "Saint Vincent and the Grenadines", alpha_2_code: "VC", alpha_3_code: "VCT", code: "670", flag: countries.vc },
//     { name: "Samoa", alpha_2_code: "WS", alpha_3_code: "WSM", code: "882", flag: countries.ws },
//     { name: "San Marino", alpha_2_code: "SM", alpha_3_code: "SMR", code: "674", flag: countries.sm },
//     { name: "Sao Tome and Principe", alpha_2_code: "ST", alpha_3_code: "STP", code: "678", flag: countries.st },
//     { name: "Saudi Arabia", alpha_2_code: "SA", alpha_3_code: "SAU", code: "682", flag: countries.sa },
//     { name: "Senegal", alpha_2_code: "SN", alpha_3_code: "SEN", code: "686", flag: countries.sn },
//     { name: "Serbia", alpha_2_code: "RS", alpha_3_code: "SRB", code: "688", flag: countries.rs },
//     { name: "Seychelles", alpha_2_code: "SC", alpha_3_code: "SYC", code: "690", flag: countries.sc },
//     { name: "Sierra Leone", alpha_2_code: "SL", alpha_3_code: "SLE", code: "694", flag: countries.sl },
//     { name: "Singapore", alpha_2_code: "SG", alpha_3_code: "SGP", code: "702", flag: countries.sg },
//     { name: "Sint Maarten (Dutch part)", alpha_2_code: "SX", alpha_3_code: "SXM", code: "534", flag: countries.sx },
//     { name: "Slovakia", alpha_2_code: "SK", alpha_3_code: "SVK", code: "703", flag: countries.sk },
//     { name: "Slovenia", alpha_2_code: "SI", alpha_3_code: "SVN", code: "705", flag: countries.si },
//     { name: "Solomon Islands", alpha_2_code: "SB", alpha_3_code: "SLB", code: "090", flag: countries.sb },
//     { name: "Somalia", alpha_2_code: "SO", alpha_3_code: "SOM", code: "706", flag: countries.so },
//     { name: "South Africa", alpha_2_code: "ZA", alpha_3_code: "ZAF", code: "710", flag: countries.za },
//     { name: "South Georgia and the South Sandwich Islands", alpha_2_code: "GS", alpha_3_code: "SGS", code: "239", flag: countries.gs },
//     { name: "South Sudan", alpha_2_code: "SS", alpha_3_code: "SSD", code: "728", flag: countries.ss },
//     { name: "Spain", alpha_2_code: "ES", alpha_3_code: "ESP", code: "724", flag: countries.es },
//     { name: "Sri Lanka", alpha_2_code: "LK", alpha_3_code: "LKA", code: "144", flag: countries.lk },
//     { name: "Sudan", alpha_2_code: "SD", alpha_3_code: "SDN", code: "729", flag: countries.sd },
//     { name: "Suriname", alpha_2_code: "SR", alpha_3_code: "SUR", code: "740", flag: countries.sr },
//     { name: "Svalbard and Jan Mayen", alpha_2_code: "SJ", alpha_3_code: "SJM", code: "744", flag: countries.sj },
//     { name: "Sweden", alpha_2_code: "SE", alpha_3_code: "SWE", code: "752", flag: countries.se },
//     { name: "Switzerland", alpha_2_code: "CH", alpha_3_code: "CHE", code: "756", flag: countries.ch },
//     { name: "Syrian Arab Republic", alpha_2_code: "SY", alpha_3_code: "SYR", code: "760", flag: countries.sy },
//     { name: "Taiwan", alpha_2_code: "TW", alpha_3_code: "TWN", code: "158", flag: countries.tw },
//     { name: "Tajikistan", alpha_2_code: "TJ", alpha_3_code: "TJK", code: "762", flag: countries.tj },
//     { name: "Tanzania", alpha_2_code: "TZ", alpha_3_code: "TZA", code: "834", flag: countries.tz },
//     { name: "Thailand", alpha_2_code: "TH", alpha_3_code: "THA", code: "764", flag: countries.th },
//     { name: "Timor-Leste", alpha_2_code: "TL", alpha_3_code: "TLS", code: "626", flag: countries.tl },
//     { name: "Togo", alpha_2_code: "TG", alpha_3_code: "TGO", code: "768", flag: countries.tg },
//     { name: "Tokelau", alpha_2_code: "TK", alpha_3_code: "TKL", code: "772", flag: countries.tk },
//     { name: "Tonga", alpha_2_code: "TO", alpha_3_code: "TON", code: "776", flag: countries.to },
//     { name: "Trinidad and Tobago", alpha_2_code: "TT", alpha_3_code: "TTO", code: "780", flag: countries.tt },
//     { name: "Tunisia", alpha_2_code: "TN", alpha_3_code: "TUN", code: "788", flag: countries.tn },
//     { name: "Turkey", alpha_2_code: "TR", alpha_3_code: "TUR", code: "792", flag: countries.tr },
//     { name: "Turkmenistan", alpha_2_code: "TM", alpha_3_code: "TKM", code: "795", flag: countries.tm },
//     { name: "Turks and Caicos Islands", alpha_2_code: "TC", alpha_3_code: "TCA", code: "796", flag: countries.tc },
//     { name: "Tuvalu", alpha_2_code: "TV", alpha_3_code: "TUV", code: "798", flag: countries.tv },
//     { name: "Uganda", alpha_2_code: "UG", alpha_3_code: "UGA", code: "800", flag: countries.ug },
//     { name: "Ukraine", alpha_2_code: "UA", alpha_3_code: "UKR", code: "804", flag: countries.ua },
//     { name: "United Arab Emirates", alpha_2_code: "AE", alpha_3_code: "ARE", code: "784", flag: countries.ae },
//     { name: "United Kingdom", alpha_2_code: "GB", alpha_3_code: "GBR", code: "826", flag: countries.gb },
//     { name: "United States", alpha_2_code: "US", alpha_3_code: "USA", code: "840", flag: countries.us },
//     { name: "Uruguay", alpha_2_code: "UY", alpha_3_code: "URY", code: "858", flag: countries.uy },
//     { name: "Uzbekistan", alpha_2_code: "UZ", alpha_3_code: "UZB", code: "860", flag: countries.uz },
//     { name: "Vanuatu", alpha_2_code: "VU", alpha_3_code: "VUT", code: "548", flag: countries.vu },
//     { name: "Vatican City", alpha_2_code: "VA", alpha_3_code: "VAT", code: "336", flag: countries.va },
//     { name: "Venezuela", alpha_2_code: "VE", alpha_3_code: "VEN", code: "862", flag: countries.ve },
//     { name: "Vietnam", alpha_2_code: "VN", alpha_3_code: "VNM", code: "704", flag: countries.vn },
//     { name: "Virgin Islands (British)", alpha_2_code: "VG", alpha_3_code: "VGB", code: "092", flag: countries.vg },
//     { name: "Virgin Islands (U.S.)", alpha_2_code: "VI", alpha_3_code: "VIR", code: "850", flag: countries.vi },
//     { name: "Wallis and Futuna", alpha_2_code: "WF", alpha_3_code: "WLF", code: "876", flag: countries.wf },
//     { name: "Western Sahara", alpha_2_code: "EH", alpha_3_code: "ESH", code: "732", flag: countries.eh },
//     { name: "Yemen", alpha_2_code: "YE", alpha_3_code: "YEM", code: "887", flag: countries.ye },
//     { name: "Zambia", alpha_2_code: "ZM", alpha_3_code: "ZMB", code: "894", flag: countries.zm },
//     { name: "Zimbabwe", alpha_2_code: "ZW", alpha_3_code: "ZWE", code: "716", flag: countries.zw },
//     { name: "Åland Islands", alpha_2_code: "AX", alpha_3_code: "ALA", code: "248", flag: countries.ax }
// ]

// export function getFlagByAlphaCode2(alphaCode2: string) {
//     const country = allCountries.find((c) => c.alpha_2_code?.toLowerCase() === alphaCode2.toLowerCase());
//     return country?.flag || "<svg></svg>";
// }
// export function getFlagByCountryName(name: string) {
//     const country = allCountries.find((c) => c.name?.toLowerCase() === name.toLowerCase());
//     return country?.flag || "<svg></svg>";
// }


export function showSweetAlert(title: string, text: string, icon: 'warning' | 'error' | 'success' | 'info' | 'question') {
    Swal.fire({
        title: title,
        text: text,
        backdrop: `rgba(60,60,60,0.8)`,
        icon: icon,
    });
}

//Error Handling functions
export function handleValidationError(
    error: any,
    errorSetter: React.Dispatch<React.SetStateAction<IValidationErrorAlert>>,
    validationSetter: React.Dispatch<React.SetStateAction<boolean>>,
) {
    errorSetter({
        isError: true,
        message: error.message
    });
    validationSetter(true);
}

export function handlePostError(error: any) {
    showSweetAlert(`Error ${error.status}!`, error.message, 'error');
}

export function handleFetchingError(error: any, errorSetter: React.Dispatch<React.SetStateAction<IFetchingErrorAlert>>) {
    // if (error instanceof UnauthorizedError || error instanceof ForbiddenError) {
      // dispatch(logout());
      // } else {
        errorSetter({
            isError: true,
            statusCode: error.status,
            message: error.message,
        });
    // }
}