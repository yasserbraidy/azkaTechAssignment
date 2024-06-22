import { useEffect, useState } from "react";
import SelectInput from "../SelectInput";
import ISelectInput from "../SelectInput/interface";
import ICountry from "../../../services/entities/country";
import { getAllCountries } from "../../../Pages/Country/Data";

export default function CountryInput(props: ISelectInput) {
    const [countries, setCountries] = useState<Array<ICountry>>([]);
    async function fetchCountries() {
        const countriesList = await getAllCountries();
        setCountries(countriesList.data);
    }
    useEffect(() => {
        fetchCountries();
    },[])
    const {
        name = "countryId",
        className,
        value,
        onChange,
        id
    } = props;
    return (
        <SelectInput
            className={className}
            label="Select a Country"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            options={countries.map((item) => ({
                value: item.id,
                label: item.name,
            }))}
        />
    );
}