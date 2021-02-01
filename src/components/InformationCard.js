import { Progress } from 'semantic-ui-react'

export function InfoCard(props) {
    console.log('PROPS', props)
    return(
        <div className="grid grid-cols-2 gap-8 text-eggshell">
            <div className="justify-center bg-blackcoral rounded p-8 ml-8">
              <p className="text-3xl font-bold">First Dose</p>
              <p className="font-semibold">{props.cleanFirstDose} people have had their first vaccine dose by the {props.date}. That's the equivalent of {props.percentVaccFirstDose}% of the population that are eligible for a vaccine.</p>
              <p className="font-semibold">This is a { props.differenceFirstDose > 0 ? 'increase' : 'decrease'} of {props.differenceFirstDose} from yesterday</p>
            </div>
            <div className="justify-center bg-blackcoral rounded p-8 mr-8">
              <h4 className="text-3xl font-bold">Second dose</h4>
              <p className="font-semibold">{props.cleanSecondDose} people have had their first vaccine dose by the {props.date}. That's the equivalent of {props.percentVaccSecondDose}% of the population that are eligible for a vaccine.</p>
              <p className="font-semibold">This is a { props.differenceSecondDose > 0 ? 'increase' : 'decrease'} of {props.differenceSecondDose} from yesterday</p>
            </div>
        </div>
    )
}