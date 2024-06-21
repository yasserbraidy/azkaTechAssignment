import ID from "../Identity";

export default interface BaseEntity extends ID{
    created_at?: Date,
    updated_at?: Date,
}