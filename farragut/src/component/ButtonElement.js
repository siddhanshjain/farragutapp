// @flow
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
//components
const ButtonElement = ({
  name,
  variant,
  href,
  target,
  children,
  icon,
  svg,
  link,
  className: classNames,
  type,
  button,
  as,
  tooltip,
  tooltipAlign,
  loading,
  title,
  iconPosition,
  ...otherProps
}) => {
  let iconClass = !name && icon ? "shadow-none" : "";
  let className =
    `shadow-none btn btn-` + (variant || "none") + " " + (classNames || "");
  switch (as) {
    case "href":
      return (
        <a
          className={className + (!name && icon ? " p-0 " : "") + iconClass}
          variant={variant}
          href={href}
          target={target}
          {...otherProps}
        >
          {name && <span title={title && title}>{name}</span>}
          {tooltip ? (
            icon &&
            tooltip && (
              <span>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      <span className="text-start d-block">{tooltip}</span>
                    </Tooltip>
                  }
                >
                  <span className="d-inline-block mx-1">{icon}</span>
                </OverlayTrigger>
              </span>
            )
          ) : icon ? (
            <span title={title && title}>{icon}</span>
          ) : (
            ""
          )}
        </a>
      );
    case "link":
      return (
        <Link
          className={className + " " + iconClass}
          variant={variant}
          to={link || ""}
          {...otherProps}
        >
          {name && <span>{name}</span>}
          {tooltip ? (
            icon &&
            tooltip && (
              <span>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      <span className="text-start d-block">{tooltip}</span>
                    </Tooltip>
                  }
                >
                  <span className="d-inline-block mx-1">{icon}</span>
                </OverlayTrigger>
              </span>
            )
          ) : icon ? (
            <span>{icon}</span>
          ) : svg ? (
            svg
          ) : (
            ""
          )}
        </Link>
      );
    case "text":
      return (
        <span {...otherProps}>
          {tooltip ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  <span className="text-start d-block">{tooltip}</span>
                </Tooltip>
              }
            >
              {<span>{name}</span>}
            </OverlayTrigger>
          ) : title ? (
            <span title={title}>{name}</span>
          ) : (
            <span>{name}</span>
          )}
        </span>
      );
    default:
      return (
        <>
          <Button
            variant={variant || "none"}
            type={type}
            loading={!!loading?.toString() ? "false" : "true"}
            className={" shadow-none " + classNames}
            title={title && title}
            data-bs-toggle="tooltip"
            data-bs-placement={tooltipAlign === "right" ? "right" : "top"}
            {...otherProps}
          >
            {iconPosition === "left" && <span>{icon}</span>}
            {name && <span>{name}</span>}
            {tooltip ? (
              icon &&
              tooltip && (
                <span>
                  <OverlayTrigger
                    placement={tooltipAlign === "right" ? "right" : "top"}
                    overlay={
                      <Tooltip>
                        <span className="text-start d-block">{tooltip}</span>
                      </Tooltip>
                    }
                  >
                    <span className="d-inline-block mx-1">{icon}</span>
                  </OverlayTrigger>
                </span>
              )
            ) : icon && iconPosition !== "left" ? (
              <span>{icon}</span>
            ) : svg ? (
              svg
            ) : (
              ""
            )}
          </Button>
        </>
      );
  }
};

export default ButtonElement;
