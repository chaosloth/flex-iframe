import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import Panel from "./components/Panel";

const PLUGIN_NAME = "FlexIframePlugin";

export default class FlexIframePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const rightPanel = <Panel key="panel-replacement" />;

    flex.AgentDesktopView.Panel2.Content.replace(rightPanel, {
      sortOrder: -1,
    });
  }
}
