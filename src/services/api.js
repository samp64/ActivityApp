import { API } from "aws-amplify";

const getAddress = async () => await API.get("address", "/address");

export { getAddress };