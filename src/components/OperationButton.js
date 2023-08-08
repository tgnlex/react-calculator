import { ACTIONS } from "../scripts/GlobalVar.js"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button className="btn" onClick={() =>
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation} })
      }
    >
      {operation}
    </button>
  )
}
