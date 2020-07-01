
declare module 'santa-integration-tests' {
  export interface BootstrapConfiguration {
    /**
     * List of experiments to open
     */
    experimentsOn?: Array<string>;
    /**
     * List of experiments to close
     */
    experimentsOff?: Array<string>;
    /**
     * Sets the neverSaved parameter in viewer VM
     */
    isTemplate?: boolean;
    /**
     * Injects custom spec map entries into viewer VM
     */
    customSpecMapEntries?: string;
    /**
     * Injects custom pages platform applications into viewer VM
     */
    customPagesPlatformApplications?: string;
    /**
     * Page which needs to be open
     */
    url?: string;
  }

  export interface WithViewerConfig extends BootstrapConfiguration {
    petri_ovr?: any;
    url?: string;
    queryParams?: Record<string, any>;
    baseUrl?: string;
    emulateMobileDevice?: boolean;
    emulateTablet?: boolean;
    emulateGoogleBot?: boolean;
    enableVideoPlayback?: boolean;
    waitUntil?: any;
    wixcode?: any;
  }

  export interface BootstrapApi {
    addPanel: any;
    componentFactory: any;
    hiddenItemsPanel: any;
    layersPanel: any;
    linkPanel: any;
    namePanel: any;
    notificationCenter: any;
    gfpp: any;
    compControls: any;
    rightClickMenu: any;
    topBar: any;
    toolbar: any;
    pagesMenu: any;
    deletePageConfirmationPanel: any;
    deleteSectionPageConfirmationPanel: any;
    dialogs: any;
    client: any;
    widgetView: any;
    widgetDesignSection: any;
    widgetAddElementsPanel: any;
    outlineSection: any;
    platformSidePanel: any;
    sectionedPanel: any;
    sectionedPanelPreview: any;
    widgetPublicAPI: any;
    propertiesPanel: any;
    progressBarPanel: any;
    platformErrorPanel: any;
    platformConfirmationPanel: any;
    textInputSettingsPanel: any;
    platformChangeVariationsPanel: any;
    packagesView: any;
    failSavePanel: any;
    saveSuccessPanel: any;
    publishSuccessPanel: any;
    chooseDomainPanel: any;
    mobileDiscoverabilityPanel: any;
    concurrentSavePanel: any;
    mediaTransferPanel: any;
    savedComponentsPanel: any;
    confirmOpenWidget: any;
    confirmResetAndCloseWidget: any;
    tracer: any;
    treeView: any;
    components: any;
    editor: any;
    platform: any;
    pagesDriver: any;
    componentsDriver: any;
    viewer: any;
    packagePanel: any;
    appImportErrorPanel: any;
    widgetWarningMessage: any;
    wixCodeEditor: any;
    networkDriver: any;
    interactions: any;
    leftBar: any;
    leftPane: any;
    leftPaneTree: any;
    leftPanePagesTree: any;
    leftPaneFilesTree: any;
    leftPaneNpmTree: any;
    leftPaneCollectionsTree: any;
    searchInAllFiles: any;
    universalEditorApp: any;
    mediaManager: any;
    appBuilderIdeTreeHeader: any;
    appSettingsPanel: any;
    customTypesView: any;
    panelsFactory: any;
    siteButtonSettingsPanel: any;
    appBuilderWelcomeScreen: any;
    focusBox: any;
    editBox: any;
    highlightsLayer: any;
    localModeDriver: any;
  }

  export type BootstrapFunction<Config, API = BootstrapApi> = (
    config: Config,
    tester: (api: API) => Promise<void> | void,
  ) => any;

  export const constants: {
    DatePickerWidgetStructure: {
      SERIALIZED_PAGE: {
        activeModes: {};
        componentType: string;
        components: Array<{
          activeModes: {};
          componentType: string;
          components: Array<{
            componentType: string;
            connections: {
              id: string;
              items: Array<{
                role: string;
                type: string;
              }>;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              type: string;
            };
            data: {
              allowFutureDates: boolean;
              allowPastDates: boolean;
              disabledDates: Array<any>;
              disabledDaysOfWeek: Array<any>;
              id: string;
              label: string;
              maxDate: any;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              minDate: any;
              placeholder: string;
              type: string;
            };
            id: string;
            layout: {
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            props: {
              dateFormat: string;
              defaultTextType: string;
              id: string;
              inputHeight: any;
              labelMargin: number;
              labelPadding: number;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              placeholder: string;
              textAlignment: string;
              textPadding: number;
              type: string;
            };
            skin: string;
            style: {
              compId: string;
              componentClassName: string;
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              pageId: string;
              skin: string;
              style: {
                properties: {
                  'alpha-bg': string;
                  'alpha-bgh': string;
                  'alpha-brd': string;
                  'alpha-brdh': string;
                  'bg-day-selected': string;
                  'bg-header': string;
                  bgh: string;
                  'boxShadowToggleOn-shd': string;
                  'boxShadowToggleOn-shd-calendar': string;
                  brd: string;
                  'brd-calendar': string;
                  brdd: string;
                  brde: string;
                  brdf: string;
                  brdh: string;
                  fnt: string;
                  'fnt-family-day': string;
                  'fnt-family-header': string;
                  fntlbl: string;
                  'icn-color': string;
                  'rd-calendar': string;
                  shd: string;
                  'shd-calendar': string;
                  txt: string;
                  'txt-day': string;
                  'txt-size-day': string;
                  'txt-size-header': string;
                  txtd: string;
                  txtlbl: string;
                };
                propertiesSource: {
                  bg: string;
                  'bg-day-selected': string;
                  'bg-header': string;
                  bgcd: string;
                  bgh: string;
                  brd: string;
                  'brd-calendar': string;
                  brdd: string;
                  brde: string;
                  brdf: string;
                  brdh: string;
                  brw: string;
                  brwf: string;
                  brwh: string;
                  fnt: string;
                  'fnt-family-day': string;
                  'fnt-family-header': string;
                  fntlbl: string;
                  'icn-color': string;
                  rd: string;
                  'rd-calendar': string;
                  shd: string;
                  txt: string;
                  'txt-day': string;
                  'txt-size-day': string;
                  'txt-size-header': string;
                  txtd: string;
                  txtlbl: string;
                };
              };
              styleType: string;
              type: string;
            };
            type: string;
          }>;
          connections: {
            id: string;
            items: Array<{
              role: string;
              type: string;
            }>;
            type: string;
          };
          design: {
            background: {
              alignType: string;
              color: string;
              colorOverlay: string;
              colorOverlayOpacity: number;
              fittingType: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              scrollType: string;
              type: string;
            };
            cssStyle: {};
            id: string;
            metaData: {
              isHidden: boolean;
              isPreset: boolean;
              schemaVersion: string;
            };
            themeMappings: {};
            type: string;
          };
          id: string;
          layout: {
            docked: {
              hCenter: {
                px: number;
              };
              top: {
                px: number;
              };
            };
            fixedPosition: boolean;
            height: number;
            rotationInDegrees: number;
            scale: number;
            width: number;
            x: number;
            y: number;
          };
          props: {
            allowOverflowContent: boolean;
            type: string;
          };
          style: string;
          type: string;
        }>;
        connections: {
          items: Array<{
            role: string;
            type: string;
          }>;
          type: string;
        };
        data: {
          descriptionSEO: string;
          hidePage: boolean;
          hideTitle: boolean;
          icon: string;
          indexable: boolean;
          isLandingPage: boolean;
          isMobileLandingPage: boolean;
          isPopup: boolean;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          metaKeywordsSEO: string;
          pageBackgrounds: {
            desktop: {
              custom: boolean;
              isPreset: boolean;
              ref: {
                alignType: string;
                color: string;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
            mobile: {
              custom: boolean;
              isPreset: boolean;
              mediaSizing: string;
              ref: {
                alignType: string;
                color: string;
                colorOverlay: string;
                colorOverlayOpacity: number;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
          };
          pageSecurity: {
            dialogLanguage: string;
            passwordDigest: string;
            requireLogin: boolean;
          };
          pageTitleSEO: string;
          pageUriSEO: string;
          title: string;
          tpaApplicationId: number;
          translationData: {
            uriSEOTranslated: boolean;
          };
          type: string;
          underConstruction: boolean;
        };
        layout: {
          fixedPosition: boolean;
          height: number;
          rotationInDegrees: number;
          scale: number;
          width: number;
          x: number;
          y: number;
        };
        mobileHints: {
          hidden: boolean;
          type: string;
        };
        skin: string;
        style: {
          compId: string;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          pageId: string;
          skin: string;
          style: {
            properties: {
              bg: string;
            };
            propertiesSource: {};
          };
          styleType: string;
          type: string;
        };
        type: string;
      };
    };
    GFPPButtons: {
      ANIMATION: string;
      LINK: string;
      SCALE_DOWN: string;
      SCALE_UP: string;
      SETTINGS: string;
    };
    appBuilderTestApp: {
      id: string;
      name: string;
      widgets: Array<{
        name: string;
      }>;
    };
    appStudioModels: {
      PUBLISHED_APP: {
        appName: string;
        appVersion: string;
        devSiteAppDefId: string;
      };
      SAVED_APP: {
        appName: string;
        devSiteAppDefId: string;
      };
    };
    buildResponses: {
      BUILD_ERROR: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
    };
    buttonAndImageWidget: {
      SERIALIZED_PAGE: {
        activeModes: {};
        componentType: string;
        components: Array<{
          componentType: string;
          components: Array<{
            componentType: string;
            connections: {
              id: string;
              items: Array<{
                role: string;
                type: string;
              }>;
              type: string;
            };
            data: {
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              svgId: string;
              title: string;
              type: string;
            };
            design: {
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              overrideColors: {
                color1: string;
                color2: string;
                color3: string;
              };
              shapeStyle: {
                enableStroke: boolean;
                opacity: number;
                stroke: string;
                strokeOpacity: number;
                strokeWidth: number;
              };
              type: string;
            };
            id: string;
            layout: {
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            mobileStructure: {
              layout: {
                fixedPosition: boolean;
                height: number;
                rotationInDegrees: number;
                scale: number;
                width: number;
                x: number;
                y: number;
              };
              metaData: {
                author: string;
                originalCompId: string;
              };
            };
            props: {
              displayMode: string;
              flip: string;
              id: string;
              metaData: {
                schemaVersion: string;
              };
              type: string;
            };
            skin: string;
            style: {
              componentClassName: string;
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              skin: string;
              style: {
                groups: {};
                properties: {};
                propertiesSource: {};
              };
              styleType: string;
              type: string;
            };
            type: string;
          }>;
          connections: {
            id: string;
            items: Array<{
              role: string;
              type: string;
            }>;
            type: string;
          };
          design: {
            background: {
              alignType: string;
              color: string;
              colorOverlay: string;
              colorOverlayOpacity: number;
              fittingType: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              scrollType: string;
              type: string;
            };
            cssStyle: {};
            id: string;
            metaData: {
              isHidden: boolean;
              isPreset: boolean;
              schemaVersion: string;
            };
            themeMappings: {};
            type: string;
          };
          id: string;
          layout: {
            docked: {
              hCenter: {
                px: number;
              };
              top: {
                px: number;
              };
            };
            fixedPosition: boolean;
            height: number;
            rotationInDegrees: number;
            scale: number;
            width: number;
            x: number;
            y: number;
          };
          mobileStructure: {
            layout: {
              docked: {
                hCenter: {
                  px: number;
                };
                top: {
                  px: number;
                };
              };
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            metaData: {
              author: string;
              originalCompId: string;
            };
          };
          props: {
            allowOverflowContent: boolean;
            id: string;
            metaData: {
              autoGenerated: boolean;
              schemaVersion: string;
            };
            type: string;
          };
          style: string;
          type: string;
        }>;
        connections: {
          id: string;
          items: Array<{
            role: string;
            type: string;
          }>;
          type: string;
        };
        data: {
          descriptionSEO: string;
          hidePage: boolean;
          hideTitle: boolean;
          icon: string;
          indexable: boolean;
          isLandingPage: boolean;
          isMobileLandingPage: boolean;
          isPopup: boolean;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          metaKeywordsSEO: string;
          pageBackgrounds: {
            desktop: {
              custom: boolean;
              isPreset: boolean;
              ref: {
                alignType: string;
                color: string;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
            mobile: {
              custom: boolean;
              isPreset: boolean;
              mediaSizing: string;
              ref: {
                alignType: string;
                color: string;
                colorOverlay: string;
                colorOverlayOpacity: number;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
          };
          pageSecurity: {
            dialogLanguage: string;
            passwordDigest: string;
            requireLogin: boolean;
          };
          pageTitleSEO: string;
          pageUriSEO: string;
          title: string;
          tpaApplicationId: number;
          translationData: {
            uriSEOTranslated: boolean;
          };
          type: string;
          underConstruction: boolean;
        };
        id: string;
        layout: {
          fixedPosition: boolean;
          height: number;
          rotationInDegrees: number;
          scale: number;
          width: number;
          x: number;
          y: number;
        };
        mobileComponents: Array<{
          componentType: string;
          components: Array<{
            componentType: string;
            connections: {
              id: string;
              items: Array<{
                role: string;
                type: string;
              }>;
              type: string;
            };
            data: {
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              svgId: string;
              title: string;
              type: string;
            };
            design: {
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              overrideColors: {
                color1: string;
                color2: string;
                color3: string;
              };
              shapeStyle: {
                enableStroke: boolean;
                opacity: number;
                stroke: string;
                strokeOpacity: number;
                strokeWidth: number;
              };
              type: string;
            };
            id: string;
            layout: {
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            props: {
              displayMode: string;
              flip: string;
              id: string;
              metaData: {
                schemaVersion: string;
              };
              type: string;
            };
            skin: string;
            style: {
              componentClassName: string;
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              skin: string;
              style: {
                groups: {};
                properties: {};
                propertiesSource: {};
              };
              styleType: string;
              type: string;
            };
            type: string;
          }>;
          connections: {
            id: string;
            items: Array<{
              role: string;
              type: string;
            }>;
            type: string;
          };
          design: {
            background: {
              alignType: string;
              color: string;
              colorOverlay: string;
              colorOverlayOpacity: number;
              fittingType: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              scrollType: string;
              type: string;
            };
            cssStyle: {};
            id: string;
            metaData: {
              isHidden: boolean;
              isPreset: boolean;
              schemaVersion: string;
            };
            themeMappings: {};
            type: string;
          };
          id: string;
          layout: {
            docked: {
              hCenter: {
                px: number;
              };
              top: {
                px: number;
              };
            };
            fixedPosition: boolean;
            height: number;
            rotationInDegrees: number;
            scale: number;
            width: number;
            x: number;
            y: number;
          };
          props: {
            allowOverflowContent: boolean;
            id: string;
            metaData: {
              autoGenerated: boolean;
              schemaVersion: string;
            };
            type: string;
          };
          style: string;
          type: string;
        }>;
        mobileHints: {
          hidden: boolean;
          id: string;
          type: string;
        };
        skin: string;
        style: {
          compId: string;
          id: string;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          pageId: string;
          skin: string;
          style: {
            properties: {
              bg: string;
            };
            propertiesSource: {};
          };
          styleType: string;
          type: string;
        };
        type: string;
      };
    };
    customTypes: {
      person: {
        displayName: string;
        name: string;
        properties: Array<{
          displayName: string;
          name: string;
        }>;
      };
    };
    inballaWidgetStructure: {
      SERIALIZED_PAGE: {
        activeModes: {};
        componentType: string;
        components: Array<{
          componentType: string;
          components: Array<{
            componentType: string;
            connections: {
              items: Array<{
                role: string;
                type: string;
              }>;
              type: string;
            };
            data: {
              label: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              type: string;
            };
            layout: {
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            mobileStructure: {
              componentType: string;
              conversionData: {
                isCustomPreset: boolean;
              };
              layout: {
                fixedPosition: boolean;
                height: number;
                rotationInDegrees: number;
                scale: number;
                width: number;
                x: number;
                y: number;
              };
              type: string;
            };
            props: {
              align: string;
              margin: number;
              metaData: {
                schemaVersion: string;
              };
              type: string;
            };
            style: {
              compId: string;
              componentClassName: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              pageId: string;
              skin: string;
              style: {
                groups: {};
                properties: {
                  'alpha-bg': string;
                  'alpha-bgh': string;
                  'alpha-brd': string;
                  'alpha-brdh': string;
                  'alpha-txt': string;
                  'alpha-txth': string;
                  bg: string;
                  bgh: string;
                  'boxShadowToggleOn-shd': string;
                  brd: string;
                  brdh: string;
                  brw: string;
                  fnt: string;
                  rd: string;
                  shd: string;
                  txt: string;
                  txth: string;
                };
                propertiesSource: {
                  'alpha-brdh': string;
                  bg: string;
                  bgh: string;
                  brd: string;
                  brdh: string;
                  brw: string;
                  fnt: string;
                  rd: string;
                  shd: string;
                  txt: string;
                  txth: string;
                };
              };
              styleType: string;
              type: string;
            };
            type: string;
          }>;
          connections: {
            items: Array<{
              role: string;
              type: string;
            }>;
            type: string;
          };
          design: {
            background: {
              alignType: string;
              color: string;
              colorOverlay: string;
              colorOverlayOpacity: number;
              fittingType: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              scrollType: string;
              type: string;
            };
            cssStyle: {};
            metaData: {
              isHidden: boolean;
              isPreset: boolean;
              schemaVersion: string;
            };
            themeMappings: {};
            type: string;
          };
          layout: {
            docked: {
              hCenter: {
                px: number;
              };
              top: {
                px: number;
              };
            };
            fixedPosition: boolean;
            height: number;
            rotationInDegrees: number;
            scale: number;
            width: number;
            x: number;
            y: number;
          };
          mobileStructure: {
            componentType: string;
            conversionData: {
              isCustomPreset: boolean;
            };
            layout: {
              docked: {
                hCenter: {
                  px: number;
                };
                top: {
                  px: number;
                };
              };
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            type: string;
          };
          style: string;
          type: string;
        }>;
        connections: {
          items: Array<{
            role: string;
            type: string;
          }>;
          type: string;
        };
        data: {
          descriptionSEO: string;
          hidePage: boolean;
          hideTitle: boolean;
          icon: string;
          indexable: boolean;
          isLandingPage: boolean;
          isMobileLandingPage: boolean;
          isPopup: boolean;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          metaKeywordsSEO: string;
          pageBackgrounds: {
            desktop: {
              custom: boolean;
              isPreset: boolean;
              ref: {
                alignType: string;
                color: string;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
            mobile: {
              custom: boolean;
              isPreset: boolean;
              mediaSizing: string;
              ref: {
                alignType: string;
                color: string;
                colorOverlay: string;
                colorOverlayOpacity: number;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
          };
          pageSecurity: {
            dialogLanguage: string;
            passwordDigest: string;
            requireLogin: boolean;
          };
          pageTitleSEO: string;
          pageUriSEO: string;
          title: string;
          tpaApplicationId: number;
          translationData: {
            uriSEOTranslated: boolean;
          };
          type: string;
          underConstruction: boolean;
        };
        layout: {
          fixedPosition: boolean;
          height: number;
          rotationInDegrees: number;
          scale: number;
          width: number;
          x: number;
          y: number;
        };
        mobileHints: {
          hidden: boolean;
          type: string;
        };
        skin: string;
        style: {
          compId: string;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          pageId: string;
          skin: string;
          style: {
            properties: {
              bg: string;
            };
            propertiesSource: {};
          };
          styleType: string;
          type: string;
        };
        type: string;
      };
    };
    knobs: {
      BOTTOM: string;
      BOTTOM_LEFT: string;
      BOTTOM_RIGHT: string;
      LEFT: string;
      RIGHT: string;
      TOP: string;
      TOP_LEFT: string;
      TOP_RIGHT: string;
    };
    multilingual: {
      mlAppDefinition: string;
      mlAppDefinitionViaSettings: {
        appDefinitionId: string;
        appDefinitionName: string;
        appFields: {
          platform: {
            editorScriptUrl: string;
            hasDashboardComponent: boolean;
          };
        };
        appRequirements: {
          requireSiteMembers: boolean;
        };
        appType: string;
        applicationId: number;
        dashboardDefaultHeight: any;
        dashboardUrl: any;
        demoMode: boolean;
        embeddedScriptUrl: any;
        gluedWidgets: any;
        installedAtDashboard: boolean;
        instance: string;
        instanceId: string;
        isWixTPA: boolean;
        onboardingSettingsUrl: string;
        openPremiumPage: boolean;
        permissions: {
          revoked: boolean;
        };
        pixelUrl: any;
        preInstalled: boolean;
        provisionOnSaveSite: boolean;
        sectionDefaultPage: any;
        sectionMobilePublished: boolean;
        sectionMobileUrl: any;
        sectionPublished: boolean;
        sectionRefreshOnWidthChange: any;
        sectionSeoEnabled: boolean;
        sectionSettings: {
          abTest: any;
          height: number;
          onboardingUrl: string;
          url: string;
          urlV2: string;
          version: number;
          width: number;
        };
        sectionUrl: any;
        settingsCompanyName: any;
        settingsDialogBanner: any;
        settingsHeight: number;
        settingsUrl: string;
        settingsWidth: number;
        type: string;
        vendorProductId: any;
        vendorProducts: Array<any>;
        version: any;
        widgets: {};
      };
      mlLinguistLanguageSupportedResponse: {
        data: {
          languages: Array<{
            code: string;
            completeFlagUrls: Array<Array<string>>;
            defaultLocale: string;
            flagUrls: {
              'af-za': string;
            };
            localizedName: string;
            name: string;
          }>;
        };
      };
      mlLinguistResponseLanguages: {
        data: {
          originalLanguage: Array<{
            code: string;
            countryCode: string;
            locale: string;
            name: string;
            status: string;
          }>;
          translationLanguages: Array<{
            code: string;
            countryCode: string;
            locale: string;
            name: string;
            status: string;
          }>;
        };
      };
      mlPlatformApp: string;
      mlPropertiesResponseData: {
        metasiteId: string;
        properties: {
          multilingual: {
            autoRedirect: boolean;
            supportedLanguages: Array<{
              countryCode: string;
              isPrimary: boolean;
              languageCode: string;
              locale: {
                country: string;
                languageCode: string;
              };
            }>;
          };
        };
        version: string;
      };
    };
    pageCode: {
      appBuilderInitialCode: string;
    };
    pinToScreenPositions: {
      BOTTOM: string;
      BOTTOM_LEFT: string;
      BOTTOM_RIGHT: string;
      LEFT: string;
      RIGHT: string;
      TOP: string;
      TOP_LEFT: string;
      TOP_RIGHT: string;
    };
    platformApps: {
      defaultAppDefIds: {
        section: string;
        widget: string;
      };
      defaultAppDefs: {
        'app-default_section_app': {
          appDefinitionId: string;
          appDefinitionName: string;
          appFields: {
            platform: {
              editorScriptUrl: string;
            };
          };
          appRequirements: {
            requireSiteMembers: boolean;
          };
          appType: string;
          applicationId: number;
          dashboardDefaultHeight: any;
          dashboardUrl: any;
          demoMode: boolean;
          embeddedScriptUrl: any;
          gluedWidgets: any;
          installedAtDashboard: boolean;
          instance: string;
          instanceId: string;
          isWixTPA: boolean;
          onboardingSettingsUrl: any;
          openPremiumPage: boolean;
          permissions: {
            revoked: boolean;
          };
          pixelUrl: any;
          preInstalled: boolean;
          provisionOnSaveSite: boolean;
          requiresEditorComponent: boolean;
          sectionDefaultPage: any;
          sectionMobilePublished: boolean;
          sectionMobileUrl: any;
          sectionPublished: boolean;
          sectionRefreshOnWidthChange: any;
          sectionSeoEnabled: boolean;
          sectionSettings: {
            abTest: boolean;
            height: number;
            url: string;
            urlV2: string;
            version: number;
            width: number;
          };
          sectionUrl: any;
          settingsCompanyName: any;
          settingsDialogBanner: any;
          settingsHeight: number;
          settingsUrl: string;
          settingsWidth: number;
          type: string;
          vendorProductId: any;
          vendorProducts: Array<any>;
          version: any;
          widgets: {
            'app-default_section_app': {
              appPage: {
                defaultPage: string;
                fullPage: boolean;
                hidden: boolean;
                hideFromMenu: boolean;
                id: string;
                indexable: boolean;
                landingPageInMobile: boolean;
                multiInstanceEnabled: boolean;
                name: string;
                order: number;
              };
              autoAddToSite: boolean;
              canBeStretched: boolean;
              componentFields: {};
              default: boolean;
              defaultHeight: number;
              defaultPosition: any;
              defaultShowOnAllPages: boolean;
              defaultWidth: number;
              gluedOptions: any;
              mobilePublished: boolean;
              mobileUrl: any;
              preFetch: boolean;
              published: boolean;
              refreshOnWidthChange: boolean;
              santaEditorPublished: boolean;
              seoEnabled: boolean;
              settings: {
                abTes: any;
                height: number;
                onboardingUrl: any;
                url: string;
                urlV2: string;
                version: number;
                width: number;
              };
              shouldBeStretchedByDefault: boolean;
              shouldBeStretchedByDefaultMobile: boolean;
              tpaWidgetId: string;
              widgetId: string;
              widgetUrl: string;
            };
          };
        };
        'app-default_widget_app': {
          appDefinitionId: string;
          appDefinitionName: string;
          appFields: {
            platform: {
              editorScriptUrl: string;
              viewerScriptUrl: string;
            };
          };
          appRequirements: {
            requireSiteMembers: boolean;
          };
          appType: string;
          applicationId: number;
          dashboardDefaultHeight: any;
          dashboardUrl: any;
          demoMode: boolean;
          embeddedScriptUrl: any;
          gluedWidgets: any;
          installedAtDashboard: boolean;
          instance: string;
          instanceId: string;
          isWixTPA: boolean;
          onboardingSettingsUrl: any;
          openPremiumPage: boolean;
          permissions: {
            revoked: boolean;
          };
          pixelUrl: any;
          preInstalled: boolean;
          provisionOnSaveSite: boolean;
          requiresEditorComponent: boolean;
          sectionDefaultPage: any;
          sectionMobilePublished: boolean;
          sectionMobileUrl: any;
          sectionPublished: boolean;
          sectionRefreshOnWidthChange: any;
          sectionSeoEnabled: boolean;
          sectionSettings: {
            abTest: boolean;
            height: number;
            url: string;
            urlV2: string;
            version: number;
            width: number;
          };
          sectionUrl: any;
          settingsCompanyName: any;
          settingsDialogBanner: any;
          settingsHeight: number;
          settingsUrl: string;
          settingsWidth: number;
          type: string;
          vendorProductId: any;
          vendorProducts: Array<any>;
          version: any;
          widgets: {
            'app-default_widget_app': {
              appPage: any;
              autoAddToSite: boolean;
              canBeStretched: boolean;
              componentFields: {};
              default: boolean;
              defaultHeight: number;
              defaultPosition: any;
              defaultShowOnAllPages: boolean;
              defaultWidth: number;
              gluedOptions: any;
              mobilePublished: boolean;
              mobileUrl: any;
              preFetch: boolean;
              published: boolean;
              refreshOnWidthChange: boolean;
              santaEditorPublished: boolean;
              seoEnabled: boolean;
              settings: {
                abTes: any;
                height: number;
                onboardingUrl: any;
                url: string;
                urlV2: string;
                version: number;
                width: number;
              };
              shouldBeStretchedByDefault: boolean;
              shouldBeStretchedByDefaultMobile: boolean;
              tpaWidgetId: string;
              widgetId: string;
              widgetUrl: string;
            };
          };
        };
      };
      defaultAppMarketPricedApp: any;
      defaultEditorScriptUrl: any;
      defaultPlatformAppDef: any;
      fakeAppPrefix: string;
    };
    platformResponses: {
      IMPORT_ERROR: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
        status: number;
      };
    };
    preInstalledApps: {
      DATA_BINDING: number;
      SITE_EXTENSION: number;
      WIXCODE: number;
    };
    responseHeaders: {
      css: {
        'access-control-allow-headers': string;
        'access-control-allow-methods': string;
        'access-control-allow-origin': string;
        age: string;
        'alt-svc': string;
        'cache-control': string;
        'content-encoding': string;
        'content-length': string;
        'content-type': string;
        date: string;
        etag: string;
        expires: string;
        'last-modified': string;
        server: string;
        status: string;
        'timing-allow-origin': string;
        vary: string;
        via: string;
        'wix-cache': string;
        'wix-edge': string;
        'x-amz-version-id': string;
      };
      html: {
        'access-control-allow-headers': string;
        'access-control-allow-methods': string;
        'access-control-allow-origin': string;
        age: string;
        'alt-svc': string;
        'cache-control': string;
        'content-encoding': string;
        'content-length': string;
        'content-type': string;
        date: string;
        etag: string;
        expires: string;
        'last-modified': string;
        server: string;
        status: string;
        'timing-allow-origin': string;
        vary: string;
        via: string;
        'wix-cache': string;
        'wix-edge': string;
        'x-amz-version-id': string;
      };
      js: {
        'access-control-allow-headers': string;
        'access-control-allow-methods': string;
        'access-control-allow-origin': string;
        age: string;
        'alt-svc': string;
        'cache-control': string;
        'content-encoding': string;
        'content-length': string;
        'content-type': string;
        date: string;
        etag: string;
        expires: string;
        'last-modified': string;
        server: string;
        status: string;
        'timing-allow-origin': string;
        vary: string;
        via: string;
        'wix-cache': string;
        'wix-edge': string;
        'x-amz-version-id': string;
      };
      json: {
        'access-control-allow-headers': string;
        'access-control-allow-methods': string;
        'access-control-allow-origin': string;
        age: string;
        'alt-svc': string;
        'cache-control': string;
        'content-encoding': string;
        'content-length': string;
        'content-type': string;
        date: string;
        etag: string;
        expires: string;
        'last-modified': string;
        server: string;
        status: string;
        'timing-allow-origin': string;
        vary: string;
        via: string;
        'wix-cache': string;
        'wix-edge': string;
        'x-amz-version-id': string;
      };
      png: {
        'access-control-allow-headers': string;
        'access-control-allow-methods': string;
        'access-control-allow-origin': string;
        age: string;
        'alt-svc': string;
        'cache-control': string;
        'content-encoding': string;
        'content-length': string;
        'content-type': string;
        date: string;
        etag: string;
        expires: string;
        'last-modified': string;
        server: string;
        status: string;
        'timing-allow-origin': string;
        vary: string;
        via: string;
        'wix-cache': string;
        'wix-edge': string;
        'x-amz-version-id': string;
      };
    };
    saveResponses: {
      APP_BUILDER_FIRST_SAVE: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
      APP_BUILDER_SAVE: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
      CONCURRENT_EDITING_ERROR: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
      EDITOR_FIRST_SAVE: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
      EDITOR_SAVE: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
      LOGIN_ERROR: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
    };
    setNamespaceResponse: {
      BLACK_LIST_ERROR: {
        body: string;
        headers: {
          'Access-Control-Allow-Credentials': string;
          'Access-Control-Allow-Headers': string;
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
        status: number;
      };
      EXISTING_NAMESPACE_ERROR: {
        body: string;
        headers: {
          'Access-Control-Allow-Credentials': string;
          'Access-Control-Allow-Headers': string;
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
        status: number;
      };
      NO_APP_DEF_ID_ERROR: {
        body: string;
        headers: {
          'Access-Control-Allow-Credentials': string;
          'Access-Control-Allow-Headers': string;
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
        status: number;
      };
      VALIDATION_ERROR: {
        body: string;
        headers: {
          'Access-Control-Allow-Credentials': string;
          'Access-Control-Allow-Headers': string;
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
        status: number;
      };
    };
    settleResponse: {
      body: string;
      headers: {
        'access-control-allow-headers': string;
        'access-control-allow-methods': string;
        'access-control-allow-origin': string;
        age: string;
        'alt-svc': string;
        'cache-control': string;
        'content-encoding': string;
        'content-length': string;
        'content-type': string;
        date: string;
        etag: string;
        expires: string;
        'last-modified': string;
        server: string;
        status: string;
        'timing-allow-origin': string;
        vary: string;
        via: string;
        'wix-cache': string;
        'wix-edge': string;
        'x-amz-version-id': string;
      };
    };
    widgetDescriptor: string;
    widgetWithAppWidget: {
      SERIALIZED_PAGE: {
        activeModes: {};
        componentType: string;
        components: Array<{
          componentType: string;
          components: Array<{
            componentType: string;
            components: Array<{
              componentType: string;
              connections: {
                id: string;
                items: Array<{
                  controllerId: string;
                  isPrimary: boolean;
                  role: string;
                  type: string;
                }>;
                type: string;
              };
              data: {
                id: string;
                label: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                type: string;
              };
              id: string;
              layout: {
                fixedPosition: boolean;
                height: number;
                rotationInDegrees: number;
                scale: number;
                width: number;
                x: number;
                y: number;
              };
              mobileStructure: {
                layout: {
                  fixedPosition: boolean;
                  height: number;
                  rotationInDegrees: number;
                  scale: number;
                  width: number;
                  x: number;
                  y: number;
                };
                props: {
                  align: string;
                  id: string;
                  margin: number;
                  metaData: {
                    schemaVersion: string;
                  };
                  type: string;
                };
              };
              props: {
                align: string;
                id: string;
                margin: number;
                metaData: {
                  schemaVersion: string;
                };
                type: string;
              };
              style: string;
              type: string;
            }>;
            connections: {
              id: string;
              items: Array<{
                controllerId: string;
                isPrimary: boolean;
                role: string;
                type: string;
              }>;
              type: string;
            };
            design: {
              background: {
                alignType: string;
                color: string;
                colorOverlay: string;
                colorOverlayOpacity: number;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
              cssStyle: {};
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              themeMappings: {};
              type: string;
            };
            id: string;
            layout: {
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            mobileHints: {
              author: string;
              id: string;
              offsetOrigin: string;
              offsetX: number;
              offsetY: number;
              orderIndex: number;
              originalCompId: string;
              recommendedScale: number;
              recommendedWidth: number;
              type: string;
            };
            mobileStructure: {
              layout: {
                fixedPosition: boolean;
                height: number;
                rotationInDegrees: number;
                scale: number;
                width: number;
                x: number;
                y: number;
              };
              props: {
                allowOverflowContent: boolean;
                id: string;
                metaData: {
                  schemaVersion: string;
                };
                type: string;
              };
            };
            props: {
              allowOverflowContent: boolean;
              id: string;
              metaData: {
                schemaVersion: string;
              };
              type: string;
            };
            style: string;
            type: string;
          }>;
          data: {
            applicationId: string;
            controllerType: string;
            id: string;
            metaData: {
              isHidden: boolean;
              isPreset: boolean;
              schemaVersion: string;
            };
            name: string;
            settings: string;
            type: string;
          };
          id: string;
          layout: {
            docked: {
              hCenter: {
                px: number;
              };
              top: {
                px: number;
              };
            };
            fixedPosition: boolean;
            height: number;
            rotationInDegrees: number;
            scale: number;
            width: number;
            x: number;
            y: number;
          };
          mobileHints: {
            author: string;
            id: string;
            recommendedWidth: number;
            type: string;
          };
          mobileStructure: {
            layout: {
              docked: {
                hCenter: {
                  px: number;
                };
                top: {
                  px: number;
                };
              };
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
          };
          style: string;
          type: string;
        }>;
        connections: {
          id: string;
          items: Array<{
            role: string;
            type: string;
          }>;
          type: string;
        };
        data: {
          descriptionSEO: string;
          hidePage: boolean;
          hideTitle: boolean;
          icon: string;
          indexable: boolean;
          isLandingPage: boolean;
          isMobileLandingPage: boolean;
          isPopup: boolean;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          metaKeywordsSEO: string;
          pageBackgrounds: {
            desktop: {
              custom: boolean;
              isPreset: boolean;
              ref: {
                alignType: string;
                color: string;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
            mobile: {
              custom: boolean;
              isPreset: boolean;
              mediaSizing: string;
              ref: {
                alignType: string;
                color: string;
                colorOverlay: string;
                colorOverlayOpacity: number;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
            };
          };
          pageSecurity: {
            dialogLanguage: string;
            passwordDigest: string;
            requireLogin: boolean;
          };
          pageTitleSEO: string;
          pageUriSEO: string;
          title: string;
          tpaApplicationId: number;
          translationData: {
            uriSEOTranslated: boolean;
          };
          type: string;
          underConstruction: boolean;
        };
        id: string;
        layout: {
          fixedPosition: boolean;
          height: number;
          rotationInDegrees: number;
          scale: number;
          width: number;
          x: number;
          y: number;
        };
        mobileComponents: Array<{
          componentType: string;
          components: Array<{
            componentType: string;
            components: Array<{
              componentType: string;
              connections: {
                id: string;
                items: Array<{
                  controllerId: string;
                  isPrimary: boolean;
                  role: string;
                  type: string;
                }>;
                type: string;
              };
              data: {
                id: string;
                linkList: Array<any>;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                stylesMapId: string;
                text: string;
                type: string;
              };
              id: string;
              layout: {
                fixedPosition: boolean;
                height: number;
                rotationInDegrees: number;
                scale: number;
                width: number;
                x: number;
                y: number;
              };
              props: {
                brightness: number;
                id: string;
                isHidden: boolean;
                metaData: {
                  autoGenerated: boolean;
                  schemaVersion: string;
                };
                packed: boolean;
                type: string;
              };
              skin: string;
              style: string;
              type: string;
            }>;
            connections: {
              id: string;
              items: Array<{
                controllerId: string;
                isPrimary: boolean;
                role: string;
                type: string;
              }>;
              type: string;
            };
            design: {
              background: {
                alignType: string;
                color: string;
                colorOverlay: string;
                colorOverlayOpacity: number;
                fittingType: string;
                metaData: {
                  isHidden: boolean;
                  isPreset: boolean;
                  schemaVersion: string;
                };
                scrollType: string;
                type: string;
              };
              cssStyle: {};
              id: string;
              metaData: {
                isHidden: boolean;
                isPreset: boolean;
                schemaVersion: string;
              };
              themeMappings: {};
              type: string;
            };
            id: string;
            layout: {
              fixedPosition: boolean;
              height: number;
              rotationInDegrees: number;
              scale: number;
              width: number;
              x: number;
              y: number;
            };
            mobileHints: {
              author: string;
              id: string;
              offsetOrigin: string;
              offsetX: number;
              offsetY: number;
              orderIndex: number;
              originalCompId: string;
              recommendedScale: number;
              recommendedWidth: number;
              type: string;
            };
            props: {
              allowOverflowContent: boolean;
              id: string;
              metaData: {
                schemaVersion: string;
              };
              type: string;
            };
            style: string;
            type: string;
          }>;
          data: {
            applicationId: string;
            controllerType: string;
            id: string;
            metaData: {
              isHidden: boolean;
              isPreset: boolean;
              schemaVersion: string;
            };
            name: string;
            settings: string;
            type: string;
          };
          id: string;
          layout: {
            docked: {
              hCenter: {
                px: number;
              };
              top: {
                px: number;
              };
            };
            fixedPosition: boolean;
            height: number;
            rotationInDegrees: number;
            scale: number;
            width: number;
            x: number;
            y: number;
          };
          mobileHints: {
            author: string;
            id: string;
            recommendedWidth: number;
            type: string;
          };
          style: string;
          type: string;
        }>;
        mobileHints: {
          hidden: boolean;
          id: string;
          type: string;
        };
        skin: string;
        style: {
          compId: string;
          id: string;
          metaData: {
            isHidden: boolean;
            isPreset: boolean;
            schemaVersion: string;
          };
          pageId: string;
          skin: string;
          style: {
            properties: {
              bg: string;
            };
            propertiesSource: {};
          };
          styleType: string;
          type: string;
        };
        type: string;
      };
    };
    wixCodeResponses: {
      GET_CHILDREN_LOGIN_ERROR: {
        body: string;
        headers: {
          'access-control-allow-headers': string;
          'access-control-allow-methods': string;
          'access-control-allow-origin': string;
          age: string;
          'alt-svc': string;
          'cache-control': string;
          'content-encoding': string;
          'content-length': string;
          'content-type': string;
          date: string;
          etag: string;
          expires: string;
          'last-modified': string;
          server: string;
          status: string;
          'timing-allow-origin': string;
          vary: string;
          via: string;
          'wix-cache': string;
          'wix-edge': string;
          'x-amz-version-id': string;
        };
      };
    };
    wixForms: {
      WIX_FORMS_APPLICATION_DEFINITION: string;
      WIX_FORMS_DEFINITION_ID: string;
      WIX_FORMS_ORIGIN: {
        origin: {
          info: {
            type: string;
          };
          initiator: string;
        };
      };
    };
    wixMusic: {
      WIX_MUSIC_APPLICATION_DEFINITION: string;
      WIX_MUSIC_DEFINITION_ID: string;
      WIX_MUSIC_SETTINGS: string;
    };
  };

  export const localMode: any;

  export const versions: {
    'document-management': {
      GA: string;
      RC: string;
    };
    santa: {
      GA: string;
      RC: string;
    };
    'santa-editor': {
      GA: string;
      RC: string;
    };
    'wix-bolt': {
      GA: string;
      RC: string;
    };
  };

  export function dsDriver({ page }: any): any;

  export function generateViewerDrivers(viewerFrame: any): any;

  export function ixDriver({ page }: any): void;

  export function openAppStudio(args: any): any;

  export function openDocumentServices(args: any): any;

  export function openEditor(args: any): any;

  export function openSiteHistory(args: any): any;

  export function openViewer(args: any): any;

  export function registerComponentDrivers(name: any, driverDef: any): void;

  export function registerViewerDrivers(driversMap: any): void;

  export function santaPaths(): any;

  export function withAppStudio(args: any): any;

  export const withDocumentServices: BootstrapFunction<BootstrapConfiguration>;

  export const withEditor: BootstrapFunction<BootstrapConfiguration>;

  export function withOfflineSanta(
    {
      emulateMobile,
      drivers,
      browser,
      url,
      beforeAll,
      afterAll,
      beforeEach,
      afterEach,
      beforeNavigation,
    }: any,
    fn: any,
  ): any;

  export function withSeo(config: any, test: any): any;

  export function withSiteHistory(args: any): any;

  export const withViewer: BootstrapFunction<WithViewerConfig>;

  export namespace PlatformApp {
    export class Builder {
      constructor(...args: Array<any>);

      addEditorScript(...args: Array<any>): void;

      addPanel(...args: Array<any>): void;

      addViewerScript(...args: Array<any>): void;

      build(...args: Array<any>): void;

      setAppDefProperty(...args: Array<any>): void;
    }

    export const DEFAULT_APP_DEF_IDs: {
      section: string;
      widget: string;
    };

    export const id: number;
  }

  export namespace artifactorySync {
    export function getGAVersion(artifactId: any, groupId: any): void;

    export function getLatestPackageVersion(packageName: any): void;

    export function getLatestRcVersion(artifactId: any, groupId: any): void;
  }

  export namespace baseComponents {
    export class DocumentServicesComponentDriver {
      constructor(...args: Array<any>);

      getNickname(...args: Array<any>): void;

      getPointer(...args: Array<any>): void;

      setNickname(...args: Array<any>): void;
    }

    export class ViewerComponent {
      constructor(...args: Array<any>);

      previewFrame: any;

      id: any;

      click(...args: Array<any>): void;

      getAttribute(...args: Array<any>): void;

      getBoundingBox(...args: Array<any>): void;

      getChild(...args: Array<any>): void;

      getDOMElementMeasurements(...args: Array<any>): void;

      getNestedElementAttribute(...args: Array<any>): void;

      getNestedElementStyleAttribute(...args: Array<any>): void;

      getSkinPart(...args: Array<any>): void;

      isAnimating(...args: Array<any>): void;

      isCollapsedOnLoad(...args: Array<any>): void;

      isDisabled(...args: Array<any>): void;

      isEnabledOnLoad(...args: Array<any>): void;

      isFixed(...args: Array<any>): void;

      isHidden(...args: Array<any>): void;

      isHiddenOnLoad(...args: Array<any>): void;

      isInViewport(...args: Array<any>): void;

      isRendered(...args: Array<any>): void;

      mouseIn(...args: Array<any>): void;

      ready(...args: Array<any>): void;

      screenshot(...args: Array<any>): void;

      scrollIntoView(...args: Array<any>): void;

      scrollTo(...args: Array<any>): void;

      waitForAnimation(...args: Array<any>): void;

      waitForChange(...args: Array<any>): void;
    }

    export class EditorComponent {
      constructor(...args: Array<any>);

      viewerComponent: ViewerComponent;

      click(...args: Array<any>): void;

      clickOnGfppButton(...args: Array<any>): void;

      delete(...args: Array<any>): void;

      dragBy(...args: Array<any>): void;

      dragByHandler(...args: Array<any>): void;

      dragTo(...args: Array<any>): void;

      duplicate(...args: Array<any>): void;

      getCompControlLabel(...args: Array<any>): void;

      hover(...args: Array<any>): void;

      inGfpp(...args: Array<any>): void;

      isFocused(...args: Array<any>): void;

      isHovered(...args: Array<any>): void;

      isResizeable(...args: Array<any>): void;

      isSelected(...args: Array<any>): void;

      openGfpp(...args: Array<any>): void;

      openPinToScreen(...args: Array<any>): void;

      resize(...args: Array<any>): void;

      resizeBy(...args: Array<any>): void;

      scrollToIfNeeded(...args: Array<any>): void;

      slowDragByAndHold(...args: Array<any>): void;

      startDragging(...args: Array<any>): void;

      startResizing(...args: Array<any>): void;

      toggleShowOnAllPages(...args: Array<any>): void;

      waitToBeSelected(...args: Array<any>): void;
    }

    export class EditorContainerComponent {
      constructor(...args: Array<any>);

      connect(...args: Array<any>): void;

      contains(...args: Array<any>): void;
    }

    export class TpaComponent {
      constructor(...args: Array<any>);

      clickSelectorInIframe(...args: Array<any>): void;

      getIframeHeight(...args: Array<any>): void;

      getIframeSrc(...args: Array<any>): void;

      getIframeTopOffset(...args: Array<any>): void;

      getIframeWidth(...args: Array<any>): void;

      isSelectorExistsInIframe(...args: Array<any>): void;

      runCodeInTPA(...args: Array<any>): void;

      waitForFrameSelector(...args: Array<any>): void;

      waitForSdkReady(...args: Array<any>): void;
    }

    export class ViewerContainerComponent {
      constructor(...args: Array<any>);

      connect(...args: Array<any>): void;

      contains(...args: Array<any>): void;

      getScrollTop(...args: Array<any>): void;
    }
  }

  export namespace baseInterceptors {
    export class AbortInterceptor {
      constructor(...args: Array<any>);

      intercept(...args: Array<any>): void;
    }

    export class RespondInterceptor {
      constructor(...args: Array<any>);

      getResponse(...args: Array<any>): void;

      intercept(...args: Array<any>): void;

      override(...args: Array<any>): void;

      shouldIntercept(...args: Array<any>): void;

      takeOver(...args: Array<any>): void;
    }
  }

  export namespace browser {
    export function connectBrowser(url: any): any;

    export function openBrowser({ host, port, headless, devtools }: any): any;
  }

  export namespace components {
    export class InlinePopup {
      constructor(...args: Array<any>);

      clickOnOverlay(...args: Array<any>): void;

      connect(...args: Array<any>): void;

      getScrollTop(...args: Array<any>): void;

      waitToBeHidden(...args: Array<any>): void;

      waitToBeShown(...args: Array<any>): void;
    }

    export class InlinePopupToggle {
      constructor(...args: Array<any>);

      click(...args: Array<any>): void;

      getAttribute(...args: Array<any>): void;

      getBoundingBox(...args: Array<any>): void;

      getChild(...args: Array<any>): void;

      getDOMElementMeasurements(...args: Array<any>): void;

      getNestedElementAttribute(...args: Array<any>): void;

      getNestedElementStyleAttribute(...args: Array<any>): void;

      getSkinPart(...args: Array<any>): void;

      isAnimating(...args: Array<any>): void;

      isCollapsedOnLoad(...args: Array<any>): void;

      isDisabled(...args: Array<any>): void;

      isEnabledOnLoad(...args: Array<any>): void;

      isFixed(...args: Array<any>): void;

      isHidden(...args: Array<any>): void;

      isHiddenOnLoad(...args: Array<any>): void;

      isInViewport(...args: Array<any>): void;

      isRendered(...args: Array<any>): void;

      mouseIn(...args: Array<any>): void;

      ready(...args: Array<any>): void;

      screenshot(...args: Array<any>): void;

      scrollIntoView(...args: Array<any>): void;

      scrollTo(...args: Array<any>): void;

      waitForAnimation(...args: Array<any>): void;

      waitForChange(...args: Array<any>): void;
    }

    export const AppController: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const FiveGridLine: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: string;
      addPanelSectionAutomationId: string;
      componentType: string;
    };

    export const Group: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: string;
      componentType: string;
    };

    export const LanguageButton: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const LoginButton: {
      ViewerComponent: any;
      componentType: string;
    };

    export const MenuButton: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const PageGroup: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const PagesContainer: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const PayPalButton: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const PopupRoot: {
      EditorComponent: any;
      addPanelCategory: string;
      addPanelSectionAutomationId: string;
      componentType: string;
    };

    export const SiteFooter: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const SiteHeader: {
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export const StripColumn: {
      DocumentServicesComponent: any;
      EditorComponent: any;
      ViewerComponent: any;
      addPanelCategory: any;
      componentType: string;
    };

    export namespace AccordionGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace Anchor {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBoundingBox(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace AppPart {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace AppPart2 {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace AppWidget {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace BackToTopButton {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        waitToBeShown(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace BoxSlideShow {
      export class EditorComponent {
        constructor(...args: Array<any>);

        getCurrentSlideComponents(...args: Array<any>): void;

        nextSlide(...args: Array<any>): void;

        prevSlide(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getCurrentSlide(...args: Array<any>): void;

        getNavigationButtonMargin(...args: Array<any>): void;

        getNextButtonBoundingBox(...args: Array<any>): void;

        getPrevButtonBoundingBox(...args: Array<any>): void;

        isNavigationButtonsShown(...args: Array<any>): void;

        isNavigationDotsShown(...args: Array<any>): void;

        nextSlide(...args: Array<any>): void;

        prevSlide(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace BoxSlideShowSlide {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Checkbox {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        isChecked(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace CollageGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace Column {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace ComboBoxInput {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getDefaultValue(...args: Array<any>): void;

        getOptions(...args: Array<any>): void;

        getSelectedIndex(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const componentType: string;
    }

    export namespace Container {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace DatePicker {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickOnScreenOverlay(...args: Array<any>): void;

        getCurrentYearAndMonth(...args: Array<any>): void;

        getFontSize(...args: Array<any>): void;

        getValue(...args: Array<any>): void;

        goNextYear(...args: Array<any>): void;

        openCalendar(...args: Array<any>): void;

        waitForScreenOverlay(...args: Array<any>): void;

        waitForScreenOverlayToClose(...args: Array<any>): void;

        waitForValueChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace DropDownMenu {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getMenuItems(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace ExpandableMenu {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickFirstArrow(...args: Array<any>): void;

        getItem(...args: Array<any>): void;

        getItems(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;

      export function EditorComponent(...args: Array<any>): void;
    }

    export namespace FacebookComment {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace FacebookLike {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace FacebookLikeBox {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace FileUploader {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getAcceptedFileTypes(...args: Array<any>): void;

        getLabel(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace FormContainer {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace FreestyleGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace GoogleMap {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getFirstMarkerInfo(...args: Array<any>): void;

        getFirstMarkerPosition(...args: Array<any>): void;

        getFirstMarkerTitle(...args: Array<any>): void;

        getIframe(...args: Array<any>): void;

        getImagePlaceholder(...args: Array<any>): void;

        getInfo(...args: Array<any>): void;

        getMapComponent(...args: Array<any>): void;

        getMapFrame(...args: Array<any>): void;

        getMarkerPosition(...args: Array<any>): void;

        getPlaceholderButtonWrapper(...args: Array<any>): void;

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Grid {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getHeader(...args: Array<any>): void;

        getRows(...args: Array<any>): void;

        waitForBodyChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace HoneyCombGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace HoverBox {
      export class EditorComponent {
        constructor(...args: Array<any>);

        switchToDefault(...args: Array<any>): void;

        switchToHover(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace HtmlComponent {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getIframeAttribute(...args: Array<any>): void;

        getIframeSrc(...args: Array<any>): void;

        getInnerFrame(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Icon {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getImage(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace Image {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getSrc(...args: Array<any>): void;

        waitForSrcChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace ImageButton {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace ImageZoom {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        close(...args: Array<any>): void;

        getSrc(...args: Array<any>): void;

        isNavigationButtonsExist(...args: Array<any>): void;

        next(...args: Array<any>): void;

        previous(...args: Array<any>): void;

        waitForItemsToBeDisplayed(...args: Array<any>): void;

        waitForSrcChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace ImpressGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace LanguageSelector {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        changeLanguage(...args: Array<any>): void;

        getButtons(...args: Array<any>): void;

        getLangCodeFromUrl(...args: Array<any>): void;

        getSelectedLanguage(...args: Array<any>): void;

        openLanguageMenu(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace LinkBar {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getImages(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace LoginSocialBar {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getButtons(...args: Array<any>): void;

        openSignUpModal(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace LoginSocialButton {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBadge(...args: Array<any>): void;

        getHref(...args: Array<any>): void;

        getIcon(...args: Array<any>): void;

        getSvg(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace Masonry {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickItemAt(...args: Array<any>): void;

        closeLightbox(...args: Array<any>): void;

        getGalleryFrame(...args: Array<any>): void;

        isIntersectingViewport(...args: Array<any>): void;

        openLightbox(...args: Array<any>): void;

        ready(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace MatrixGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getImages(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MediaBox {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MediaContainer {
      export class EditorComponent {
        constructor(...args: Array<any>);

        getChildren(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBalata(...args: Array<any>): void;

        getChildren(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MediaControls {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MediaOverlayControls {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MediaPlayer {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace MediaRichText {
      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace MediaZoom {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        close(...args: Array<any>): void;

        getItem(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MemberLoginDialog {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        login(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace MenuContainer {
      export class EditorComponent {
        constructor(...args: Array<any>);

        click(...args: Array<any>): void;

        clickOnGfppButton(...args: Array<any>): void;

        delete(...args: Array<any>): void;

        dragBy(...args: Array<any>): void;

        dragByHandler(...args: Array<any>): void;

        dragTo(...args: Array<any>): void;

        duplicate(...args: Array<any>): void;

        getCompControlLabel(...args: Array<any>): void;

        hover(...args: Array<any>): void;

        inGfpp(...args: Array<any>): void;

        isFocused(...args: Array<any>): void;

        isHovered(...args: Array<any>): void;

        isResizeable(...args: Array<any>): void;

        isSelected(...args: Array<any>): void;

        openGfpp(...args: Array<any>): void;

        openPinToScreen(...args: Array<any>): void;

        resize(...args: Array<any>): void;

        resizeBy(...args: Array<any>): void;

        scrollToIfNeeded(...args: Array<any>): void;

        slowDragByAndHold(...args: Array<any>): void;

        startDragging(...args: Array<any>): void;

        startResizing(...args: Array<any>): void;

        toggleShowOnAllPages(...args: Array<any>): void;

        waitToBeSelected(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickOnOverlay(...args: Array<any>): void;

        connect(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;

        waitToBeHidden(...args: Array<any>): void;

        waitToBeShown(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace MenuToggle {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        click(...args: Array<any>): void;

        getAttribute(...args: Array<any>): void;

        getBoundingBox(...args: Array<any>): void;

        getChild(...args: Array<any>): void;

        getDOMElementMeasurements(...args: Array<any>): void;

        getNestedElementAttribute(...args: Array<any>): void;

        getNestedElementStyleAttribute(...args: Array<any>): void;

        getSkinPart(...args: Array<any>): void;

        isAnimating(...args: Array<any>): void;

        isCollapsedOnLoad(...args: Array<any>): void;

        isDisabled(...args: Array<any>): void;

        isEnabledOnLoad(...args: Array<any>): void;

        isFixed(...args: Array<any>): void;

        isHidden(...args: Array<any>): void;

        isHiddenOnLoad(...args: Array<any>): void;

        isInViewport(...args: Array<any>): void;

        isRendered(...args: Array<any>): void;

        mouseIn(...args: Array<any>): void;

        ready(...args: Array<any>): void;

        screenshot(...args: Array<any>): void;

        scrollIntoView(...args: Array<any>): void;

        scrollTo(...args: Array<any>): void;

        waitForAnimation(...args: Array<any>): void;

        waitForChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Page {
      export class DocumentServicesComponent {
        constructor(...args: Array<any>);

        updateProperties(...args: Array<any>): void;
      }

      export class EditorComponent {
        constructor(...args: Array<any>);

        resize(...args: Array<any>): void;

        resizeBy(...args: Array<any>): void;

        startResizing(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBalata(...args: Array<any>): void;

        getInlineContentBoundingBox(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace PaginatedGridGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        closeLightbox(...args: Array<any>): void;

        getImageItem(...args: Array<any>): void;

        getRolloverHolder(...args: Array<any>): void;

        hoverItem(...args: Array<any>): void;

        isIntersectingViewport(...args: Array<any>): void;

        nextButtonClick(...args: Array<any>): void;

        openLightbox(...args: Array<any>): void;

        prevButtonClick(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace Pagination {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickNextButton(...args: Array<any>): void;

        clickPrevButton(...args: Array<any>): void;

        getCurrentPage(...args: Array<any>): void;

        getPageList(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace PinItPinWidget {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace Popover {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        waitToBeHidden(...args: Array<any>): void;

        waitToBeShown(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Popup {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        close(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace RadioGroup {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getFontSize(...args: Array<any>): void;

        getOptions(...args: Array<any>): void;

        getSelectedOptionIndex(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace RatingsDisplay {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getNumRatings(...args: Array<any>): void;

        getRating(...args: Array<any>): void;

        waitForRatingChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Repeater {
      export class EditorComponent {
        constructor(...args: Array<any>);

        getItems(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getItems(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace ScreenWidthContainer {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBoundingBox(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Section {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace SignUpDialog {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getDialogBoundingBox(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace SiteBackground {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getSiteBackgroundBoundingBox(...args: Array<any>): void;

        getSrc(...args: Array<any>): void;

        waitForCurrentBgAnimation(...args: Array<any>): void;

        waitForPreviousBgAnimation(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace SiteButton {
      export class EditorComponent {
        constructor(...args: Array<any>);

        changeText(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundColor(...args: Array<any>): void;

        getFontFamily(...args: Array<any>): void;

        getFontSize(...args: Array<any>): void;

        getLink(...args: Array<any>): void;

        getTarget(...args: Array<any>): void;

        getText(...args: Array<any>): void;

        waitForTextChange(...args: Array<any>): void;

        waitForTextToEqual(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace SiteRegionContainer {
      export class EditorComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        contains(...args: Array<any>): void;

        getScrollTop(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const componentType: string;
    }

    export namespace SlideShowGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getCurrentImage(...args: Array<any>): void;

        getImages(...args: Array<any>): void;

        nextSlide(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Slider {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickTrack(...args: Array<any>): void;

        getMax(...args: Array<any>): void;

        getMin(...args: Array<any>): void;

        getTicksCount(...args: Array<any>): void;

        getValue(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace SliderGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getImages(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace SpotifyFollow {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace SpotifyPlayer {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace StateBox {
      export class EditorComponent {
        constructor(...args: Array<any>);

        getCurrentStateComponents(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getCurrentState(...args: Array<any>): void;

        setState(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace StateBoxState {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace StateStrip {
      export class EditorComponent {
        constructor(...args: Array<any>);

        getCurrentStateComponents(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getCurrentState(...args: Array<any>): void;

        setState(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace StateStripState {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace StripColumnsContainer {
      export class EditorComponent {
        constructor(...args: Array<any>);

        clickOnFirstColumn(...args: Array<any>): void;

        getColumns(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const DocumentServicesComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace StripContainerSlideShow {
      export class EditorComponent {
        constructor(...args: Array<any>);

        getCurrentSlideComponents(...args: Array<any>): void;

        nextSlide(...args: Array<any>): void;

        prevSlide(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getCurrentSlide(...args: Array<any>): void;

        getNavigationButtonMargin(...args: Array<any>): void;

        getNextButtonBoundingBox(...args: Array<any>): void;

        getPrevButtonBoundingBox(...args: Array<any>): void;

        isNavigationButtonsShown(...args: Array<any>): void;

        isNavigationDotsShown(...args: Array<any>): void;

        nextSlide(...args: Array<any>): void;

        prevSlide(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace StripContainerSlideShowSlide {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getBackgroundBoundingBox(...args: Array<any>): void;

        getBackgroundImage(...args: Array<any>): void;

        getBackgroundParallaxRatio(...args: Array<any>): void;

        getBackgroundVideo(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace StripShowcaseGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace StripSlideshowGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace StylableButton {
      export class DocumentServicesComponent {
        constructor(...args: Array<any>);

        applyForceState(...args: Array<any>): void;

        applyQuickChange(...args: Array<any>): void;

        revertForceState(...args: Array<any>): void;

        revertQuickChange(...args: Array<any>): void;

        updateStyle(...args: Array<any>): void;
      }

      export class EditorComponent {
        constructor(...args: Array<any>);

        click(...args: Array<any>): void;

        clickOnGfppButton(...args: Array<any>): void;

        delete(...args: Array<any>): void;

        dragBy(...args: Array<any>): void;

        dragByHandler(...args: Array<any>): void;

        dragTo(...args: Array<any>): void;

        duplicate(...args: Array<any>): void;

        getCompControlLabel(...args: Array<any>): void;

        hover(...args: Array<any>): void;

        inGfpp(...args: Array<any>): void;

        isFocused(...args: Array<any>): void;

        isHovered(...args: Array<any>): void;

        isResizeable(...args: Array<any>): void;

        isSelected(...args: Array<any>): void;

        openGfpp(...args: Array<any>): void;

        openPinToScreen(...args: Array<any>): void;

        resize(...args: Array<any>): void;

        resizeBy(...args: Array<any>): void;

        scrollToIfNeeded(...args: Array<any>): void;

        slowDragByAndHold(...args: Array<any>): void;

        startDragging(...args: Array<any>): void;

        startResizing(...args: Array<any>): void;

        toggleShowOnAllPages(...args: Array<any>): void;

        waitToBeSelected(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getDataAnchor(...args: Array<any>): void;

        getLabel(...args: Array<any>): void;

        getLabelStyle(...args: Array<any>): void;

        getLink(...args: Array<any>): void;

        getTarget(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace StylableLine {
      export class DocumentServicesComponent {
        constructor(...args: Array<any>);

        applyForceState(...args: Array<any>): void;

        applyQuickChange(...args: Array<any>): void;

        revertForceState(...args: Array<any>): void;

        revertQuickChange(...args: Array<any>): void;

        updateStyle(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const componentType: string;

      export function EditorComponent(...args: Array<any>): void;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace TPA3DCarousel {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace TPA3DGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace TPAWidgetNative {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        connect(...args: Array<any>): void;

        getInnerComponentHeight(...args: Array<any>): void;

        getText(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace TPAWidgetNativeDeadcomp {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getText(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace Tags {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getTagBoundingBox(...args: Array<any>): void;

        getTagLinks(...args: Array<any>): void;

        getTagsText(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const componentType: string;
    }

    export namespace TextAreaInput {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        enterText(...args: Array<any>): void;

        getMaxLength(...args: Array<any>): void;

        getPlaceholder(...args: Array<any>): void;

        getValue(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const componentType: string;
    }

    export namespace TextInput {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        enterText(...args: Array<any>): void;

        getInputType(...args: Array<any>): void;

        getMax(...args: Array<any>): void;

        getMaxLength(...args: Array<any>): void;

        getMin(...args: Array<any>): void;

        getPlaceholder(...args: Array<any>): void;

        getValue(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace ThumbnailsGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace TinyMenu {
      export class EditorComponent {
        constructor(...args: Array<any>);

        click(...args: Array<any>): void;

        clickOnGfppButton(...args: Array<any>): void;

        delete(...args: Array<any>): void;

        dragBy(...args: Array<any>): void;

        dragByHandler(...args: Array<any>): void;

        dragTo(...args: Array<any>): void;

        duplicate(...args: Array<any>): void;

        getCompControlLabel(...args: Array<any>): void;

        hover(...args: Array<any>): void;

        inGfpp(...args: Array<any>): void;

        isFocused(...args: Array<any>): void;

        isHovered(...args: Array<any>): void;

        isResizeable(...args: Array<any>): void;

        isSelected(...args: Array<any>): void;

        openGfpp(...args: Array<any>): void;

        openPinToScreen(...args: Array<any>): void;

        resize(...args: Array<any>): void;

        resizeBy(...args: Array<any>): void;

        scrollToIfNeeded(...args: Array<any>): void;

        slowDragByAndHold(...args: Array<any>): void;

        startDragging(...args: Array<any>): void;

        startResizing(...args: Array<any>): void;

        toggleShowOnAllPages(...args: Array<any>): void;

        waitToBeSelected(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getMenuItems(...args: Array<any>): void;

        isOpen(...args: Array<any>): void;
      }

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace ToggleSwitch {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getValue(...args: Array<any>): void;

        isChecked(...args: Array<any>): void;

        isDisabled(...args: Array<any>): void;

        toggle(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const componentType: string;
    }

    export namespace TouchMediaZoom {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        close(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace TpaFreestyleGallery {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        waitForGalleryItems(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace TpaGluedWidget {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace TpaModal {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        closeModal(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace TpaMultiSection {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace TpaPopup {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace TpaSection {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace TpaWidget {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace TpaWorker {
      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;

      export function ViewerComponent(...args: Array<any>): void;
    }

    export namespace VectorImage {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getShapeStyle(...args: Array<any>): void;

        isEmpty(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace VerticalLine {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getComponentForScreenshot(...args: Array<any>): void;

        screenshot(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }

    export namespace VerticalMenu {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        clickMenuItemByText(...args: Array<any>): void;

        getActiveMenuItemText(...args: Array<any>): void;

        getItemByIndex(...args: Array<any>): void;

        getMenuItems(...args: Array<any>): void;

        selectMobileMenuItemByText(...args: Array<any>): void;
      }

      export const componentType: string;
    }

    export namespace Video {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getSrc(...args: Array<any>): void;

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace VideoPlayer {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getTitle(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace WPhoto {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        getMaskFlipDirection(...args: Array<any>): void;

        getMaskSize(...args: Array<any>): void;

        getSrc(...args: Array<any>): void;

        waitForSrcChange(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const addPanelCategory: any;

      export const componentType: string;
    }

    export namespace WRichText {
      export class EditorComponent {
        constructor(...args: Array<any>);

        changeText(...args: Array<any>): void;

        changeTextColor(...args: Array<any>): void;

        changeTextTheme(...args: Array<any>): void;

        closeSettingsPanel(...args: Array<any>): void;

        closeTextEditor(...args: Array<any>): void;

        getTextTheme(...args: Array<any>): void;

        getTitle(...args: Array<any>): void;

        openSettingsPanel(...args: Array<any>): void;

        openTextEditor(...args: Array<any>): void;

        toggleBold(...args: Array<any>): void;

        toggleItalic(...args: Array<any>): void;

        toggleUnderline(...args: Array<any>): void;
      }

      export class ViewerComponent {
        constructor(...args: Array<any>);

        getFontFamily(...args: Array<any>): void;

        getFontSize(...args: Array<any>): void;

        getLink(...args: Array<any>): void;

        getText(...args: Array<any>): void;

        getTextColor(...args: Array<any>): void;

        isAllTextBold(...args: Array<any>): void;

        isAllTextItalic(...args: Array<any>): void;

        isAllTextUnderlined(...args: Array<any>): void;

        waitForTextChange(...args: Array<any>): void;
      }

      export const addPanelCategory: string;

      export const addPanelSectionAutomationId: string;

      export const componentType: string;
    }

    export namespace YouTubeSubscribeButton {
      export class ViewerComponent {
        constructor(...args: Array<any>);

        ready(...args: Array<any>): void;
      }

      export const EditorComponent: any;

      export const componentType: string;
    }
  }

  export namespace ssr {
    export function withSsr(config: any, fn: any): any;
  }
}
