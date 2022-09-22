import { Serializable } from 'child_process';

type Props = {
    jsonObject: Serializable;
};

export default function DisplayJson({ jsonObject }: Props) {
    return <div>{JSON.stringify(jsonObject)}</div>;
}
