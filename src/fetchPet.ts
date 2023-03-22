import { QueryFunction } from "@tanstack/query-core";
import { PetAPIResponse } from "./APIResponsesTypes";

const fetchPet: QueryFunction<PetAPIResponse, ["details", string]> = async ({
    queryKey
}) =>{
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if(!apiRes.ok){
        throw new Error(`datails/${id} fetch not ok`)
    }

    return apiRes.json()
};

export default fetchPet;