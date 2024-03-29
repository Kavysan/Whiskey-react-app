import Input from "./Input";
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseType, chooseAge, chooseRegion } from "../redux/slices/RootSlice";

// interfaces

interface WhiskeyFormProps {
  id?: string[]
}

const CollectionForm = (props:WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseName(data.name));
      dispatch(chooseType(data.type));
      dispatch(chooseAge(data.age));
      dispatch(chooseRegion(data.region));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
      
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"> Name</label>
          <Input {...register('name')} name='name' placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <Input {...register('type')} name='type' placeholder="Type"/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Input {...register('age')} name='age' placeholder="Age"/>
        </div>
        <div>
          <label htmlFor="region">Region</label>
          <Input {...register('region')} name='region' placeholder="Region"/>
        </div>
        <div className="flex p-1">
          <button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CollectionForm