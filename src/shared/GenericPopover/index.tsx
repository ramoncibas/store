import React, { useEffect, useState } from "react";
import { Popover, Button, PopoverBody } from "react-bootstrap";
import { useTimeout } from "react-use";

interface GenericPopoverProps {
  show: boolean;
  message: string;
  autoCloseTimeout?: number;
}

const GenericPopover: React.FC<GenericPopoverProps> = ({ show, message, autoCloseTimeout = 3000 }) => {
  const [showPopover, setShowPopover] = useState(show);

  // UseTimeout hook para fechar automaticamente o popover após 3 segundos
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopover(false);
    }, autoCloseTimeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [autoCloseTimeout]);

  const handleClose = () => {
    setShowPopover(false);
  };

  return (
    <Popover show={showPopover}>
      <PopoverBody>
        <div>{message}</div>
        <Button variant="secondary" size="sm" onClick={handleClose}>
          Fechar
        </Button>
      </PopoverBody>
    </Popover>
  );
};

export default GenericPopover;
