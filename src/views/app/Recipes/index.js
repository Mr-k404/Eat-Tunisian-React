import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ThumbnailImage from '../../../components/cards/RadialProgressCard';

export default class Recipes extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="Recipes" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
            
              <Colxx xxs="12" className="mb-4">
              <ThumbnailImage/>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
