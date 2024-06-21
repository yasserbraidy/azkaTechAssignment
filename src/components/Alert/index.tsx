import { useState, memo, useEffect } from "react";
import { Alert } from "react-bootstrap";
import IAlert from "./interface";


//deprecated
function _Alert(props: IAlert) {
  const [show, setShow] = useState(true);
  const [autoHide, setAutoHide] = useState<boolean>(false);
  useEffect(() => {
    if(props.show)
      setShow(props.show);

  }, [props.show]);

  function Hide() {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        if (props.onClose) props.onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }
    useEffect(() => {
        setAutoHide(props.autoHide || false)
        if (autoHide) {
            const timer = setTimeout(() => {
                setShow(false);
                if (props.onClose) props.onClose();
            }, props.timer || 5000);

            return () => clearTimeout(timer);
        }
    }, [show, props.onClose, autoHide]);

  // Render the alert component if show is true
    return show ? (
        <div className="bd-example">
            <Alert
                variant={`${props.type} alert-left alert-dismissible fade show mb-3`}
                role="alert"
                onClose={() => setShow(false)}
                dismissible
            >
                {props.header && <Alert.Heading>{props.header}</Alert.Heading>}
                <p>{props.message}</p>
            </Alert>
        </div>
    ) : null;
}

export default memo(_Alert);
