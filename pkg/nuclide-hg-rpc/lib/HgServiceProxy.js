"use strict";

let Observable, trackOperationTiming;

module.exports = _client => {
  const remoteModule = {};
  remoteModule.HgService = class {
    constructor(arg0) {
      _client.createRemoteObject("HgService", this, [arg0], [{
        name: "workingDirectory",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 212
          },
          kind: "string"
        }
      }])
    }
    waitForWatchmanSubscriptions() {
      return trackOperationTiming("HgService.waitForWatchmanSubscriptions", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "waitForWatchmanSubscriptions", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 229
            },
            kind: "void"
          });
        });
      });
    }
    fetchStatuses(arg0, arg1) {
      return trackOperationTiming("HgService.fetchStatuses", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 263
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 263
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "options",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 264
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 264
              },
              kind: "any"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchStatuses", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 265
            },
            kind: "map",
            keyType: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 265
              },
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 265
              },
              kind: "named",
              name: "StatusCodeIdValue"
            }
          });
        });
      });
    }
    observeFilesDidChange() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeFilesDidChange", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 447
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 447
            },
            kind: "named",
            name: "NuclideUri"
          }
        });
      }).publish();
    }
    observeHgRepoStateDidChange() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeHgRepoStateDidChange", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 455
          },
          kind: "void"
        });
      }).publish();
    }
    observeHgConflictStateDidChange() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeHgConflictStateDidChange", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 462
          },
          kind: "boolean"
        });
      }).publish();
    }
    fetchDiffInfo(arg0) {
      return trackOperationTiming("HgService.fetchDiffInfo", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 475
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 475
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchDiffInfo", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 475
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 475
              },
              kind: "map",
              keyType: {
                location: {
                  type: "source",
                  fileName: "HgService.js",
                  line: 475
                },
                kind: "named",
                name: "NuclideUri"
              },
              valueType: {
                location: {
                  type: "source",
                  fileName: "HgService.js",
                  line: 475
                },
                kind: "named",
                name: "DiffInfo"
              }
            }
          });
        });
      });
    }
    createBookmark(arg0, arg1) {
      return trackOperationTiming("HgService.createBookmark", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "name",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 507
            },
            kind: "string"
          }
        }, {
          name: "revision",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 507
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 507
              },
              kind: "string"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "createBookmark", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 507
            },
            kind: "void"
          });
        });
      });
    }
    deleteBookmark(arg0) {
      return trackOperationTiming("HgService.deleteBookmark", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "name",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 517
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "deleteBookmark", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 517
            },
            kind: "void"
          });
        });
      });
    }
    renameBookmark(arg0, arg1) {
      return trackOperationTiming("HgService.renameBookmark", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "name",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 521
            },
            kind: "string"
          }
        }, {
          name: "nextName",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 521
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "renameBookmark", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 521
            },
            kind: "void"
          });
        });
      });
    }
    fetchActiveBookmark() {
      return trackOperationTiming("HgService.fetchActiveBookmark", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchActiveBookmark", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 528
            },
            kind: "string"
          });
        });
      });
    }
    fetchBookmarks() {
      return trackOperationTiming("HgService.fetchBookmarks", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchBookmarks", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 535
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 535
              },
              kind: "named",
              name: "BookmarkInfo"
            }
          });
        });
      });
    }
    observeActiveBookmarkDidChange() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeActiveBookmarkDidChange", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 555
          },
          kind: "void"
        });
      }).publish();
    }
    observeBookmarksDidChange() {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), []).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "observeBookmarksDidChange", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 562
          },
          kind: "void"
        });
      }).publish();
    }
    fetchFileContentAtRevision(arg0, arg1) {
      return trackOperationTiming("HgService.fetchFileContentAtRevision", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 575
            },
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "revision",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 575
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 575
              },
              kind: "string"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchFileContentAtRevision", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 575
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 575
              },
              kind: "string"
            }
          });
        });
      });
    }
    fetchFilesChangedAtRevision(arg0) {
      return trackOperationTiming("HgService.fetchFilesChangedAtRevision", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "revision",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 579
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchFilesChangedAtRevision", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 579
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 579
              },
              kind: "named",
              name: "RevisionFileChanges"
            }
          });
        });
      });
    }
    fetchRevisionInfoBetweenHeadAndBase() {
      return trackOperationTiming("HgService.fetchRevisionInfoBetweenHeadAndBase", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchRevisionInfoBetweenHeadAndBase", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 589
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 589
              },
              kind: "array",
              type: {
                location: {
                  type: "source",
                  fileName: "HgService.js",
                  line: 589
                },
                kind: "named",
                name: "RevisionInfo"
              }
            }
          });
        });
      });
    }
    getBaseRevision() {
      return trackOperationTiming("HgService.getBaseRevision", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getBaseRevision", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 602
            },
            kind: "named",
            name: "RevisionInfo"
          });
        });
      });
    }
    getBlameAtHead(arg0) {
      return trackOperationTiming("HgService.getBlameAtHead", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 619
            },
            kind: "named",
            name: "NuclideUri"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getBlameAtHead", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 619
            },
            kind: "map",
            keyType: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 619
              },
              kind: "string"
            },
            valueType: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 619
              },
              kind: "string"
            }
          });
        });
      });
    }
    getConfigValueAsync(arg0) {
      return trackOperationTiming("HgService.getConfigValueAsync", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "key",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 640
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getConfigValueAsync", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 640
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 640
              },
              kind: "string"
            }
          });
        });
      });
    }
    getDifferentialRevisionForChangeSetId(arg0) {
      return trackOperationTiming("HgService.getDifferentialRevisionForChangeSetId", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "changeSetId",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 661
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getDifferentialRevisionForChangeSetId", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 661
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 661
              },
              kind: "string"
            }
          });
        });
      });
    }
    getSmartlog(arg0, arg1) {
      return trackOperationTiming("HgService.getSmartlog", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "ttyOutput",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 684
            },
            kind: "boolean"
          }
        }, {
          name: "concise",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 684
            },
            kind: "boolean"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getSmartlog", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 684
            },
            kind: "named",
            name: "AsyncExecuteRet"
          });
        });
      });
    }
    commit(arg0) {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
        name: "message",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 725
          },
          kind: "string"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "commit", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 725
          },
          kind: "named",
          name: "ProcessMessage"
        });
      }).publish();
    }
    amend(arg0, arg1) {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
        name: "message",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 737
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 737
            },
            kind: "string"
          }
        }
      }, {
        name: "amendMode",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 737
          },
          kind: "named",
          name: "AmendModeValue"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 198
          },
          name: "HgService"
        }).then(id => {
          return _client.callRemoteMethod(id, "amend", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 737
          },
          kind: "named",
          name: "ProcessMessage"
        });
      }).publish();
    }
    revert(arg0) {
      return trackOperationTiming("HgService.revert", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 754
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 754
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "revert", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 754
            },
            kind: "void"
          });
        });
      });
    }
    checkout(arg0, arg1) {
      return trackOperationTiming("HgService.checkout", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "revision",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 786
            },
            kind: "string"
          }
        }, {
          name: "create",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 786
            },
            kind: "boolean"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "checkout", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 786
            },
            kind: "void"
          });
        });
      });
    }
    rename(arg0, arg1, arg2) {
      return trackOperationTiming("HgService.rename", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 807
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 807
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "destPath",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 808
            },
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "after",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 809
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 809
              },
              kind: "boolean"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "rename", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 810
            },
            kind: "void"
          });
        });
      });
    }
    remove(arg0, arg1) {
      return trackOperationTiming("HgService.remove", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 833
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 833
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "after",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 833
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 833
              },
              kind: "boolean"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "remove", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 833
            },
            kind: "void"
          });
        });
      });
    }
    add(arg0) {
      return trackOperationTiming("HgService.add", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 854
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 854
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "add", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 854
            },
            kind: "void"
          });
        });
      });
    }
    getTemplateCommitMessage() {
      return trackOperationTiming("HgService.getTemplateCommitMessage", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getTemplateCommitMessage", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 862
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 862
              },
              kind: "string"
            }
          });
        });
      });
    }
    getHeadCommitMessage() {
      return trackOperationTiming("HgService.getHeadCommitMessage", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "getHeadCommitMessage", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 903
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 903
              },
              kind: "string"
            }
          });
        });
      });
    }
    log(arg0, arg1) {
      return trackOperationTiming("HgService.log", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 923
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 923
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "limit",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 923
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 923
              },
              kind: "number"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "log", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 923
            },
            kind: "named",
            name: "VcsLogResponse"
          });
        });
      });
    }
    fetchMergeConflicts() {
      return trackOperationTiming("HgService.fetchMergeConflicts", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "fetchMergeConflicts", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 940
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 940
              },
              kind: "named",
              name: "MergeConflict"
            }
          });
        });
      });
    }
    resolveConflictedFile(arg0) {
      return trackOperationTiming("HgService.resolveConflictedFile", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 985
            },
            kind: "named",
            name: "NuclideUri"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "resolveConflictedFile", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 985
            },
            kind: "void"
          });
        });
      });
    }
    continueRebase() {
      return trackOperationTiming("HgService.continueRebase", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "continueRebase", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 989
            },
            kind: "void"
          });
        });
      });
    }
    abortRebase() {
      return trackOperationTiming("HgService.abortRebase", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "abortRebase", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 993
            },
            kind: "void"
          });
        });
      });
    }
    copy(arg0, arg1, arg2) {
      return trackOperationTiming("HgService.copy", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePaths",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 1003
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 1003
              },
              kind: "named",
              name: "NuclideUri"
            }
          }
        }, {
          name: "destPath",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 1004
            },
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "after",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 1005
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 1005
              },
              kind: "boolean"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 198
            },
            name: "HgService"
          }).then(id => {
            return _client.callRemoteMethod(id, "copy", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 1006
            },
            kind: "void"
          });
        });
      });
    }
    dispose() {
      return _client.disposeRemoteObject(this);
    }
  };
  return remoteModule;
};

Object.defineProperty(module.exports, "inject", {
  value: function () {
    Observable = arguments[0];
    trackOperationTiming = arguments[1];
  }
});
Object.defineProperty(module.exports, "defs", {
  value: new Map([["Object", {
    kind: "alias",
    name: "Object",
    location: {
      type: "builtin"
    }
  }], ["Date", {
    kind: "alias",
    name: "Date",
    location: {
      type: "builtin"
    }
  }], ["RegExp", {
    kind: "alias",
    name: "RegExp",
    location: {
      type: "builtin"
    }
  }], ["Buffer", {
    kind: "alias",
    name: "Buffer",
    location: {
      type: "builtin"
    }
  }], ["fs.Stats", {
    kind: "alias",
    name: "fs.Stats",
    location: {
      type: "builtin"
    }
  }], ["NuclideUri", {
    kind: "alias",
    name: "NuclideUri",
    location: {
      type: "builtin"
    }
  }], ["StatusCodeIdValue", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 81
    },
    name: "StatusCodeIdValue",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 81
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "A"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "C"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "I"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "M"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "!"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "R"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "?"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 81
        },
        kind: "string-literal",
        value: "U"
      }]
    }
  }], ["MergeConflictStatusValue", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 83
    },
    name: "MergeConflictStatusValue",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 83
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 83
        },
        kind: "string-literal",
        value: "both changed"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 83
        },
        kind: "string-literal",
        value: "deleted in theirs"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 83
        },
        kind: "string-literal",
        value: "deleted in ours"
      }]
    }
  }], ["StatusCodeNumberValue", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 93
    },
    name: "StatusCodeNumberValue",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 93
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 1
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 2
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 3
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 4
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 5
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 6
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 7
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 93
        },
        kind: "number-literal",
        value: 8
      }]
    }
  }], ["HgStatusOptionValue", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 95
    },
    name: "HgStatusOptionValue",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 95
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 95
        },
        kind: "number-literal",
        value: 1
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 95
        },
        kind: "number-literal",
        value: 2
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 95
        },
        kind: "number-literal",
        value: 3
      }]
    }
  }], ["LineDiff", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 97
    },
    name: "LineDiff",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 97
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 98
        },
        name: "oldStart",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 98
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 99
        },
        name: "oldLines",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 99
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 100
        },
        name: "newStart",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 100
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 101
        },
        name: "newLines",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 101
          },
          kind: "number"
        },
        optional: false
      }]
    }
  }], ["BookmarkInfo", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 104
    },
    name: "BookmarkInfo",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 104
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 105
        },
        name: "active",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 105
          },
          kind: "boolean"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 106
        },
        name: "bookmark",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 106
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 107
        },
        name: "node",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 107
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 108
        },
        name: "rev",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 108
          },
          kind: "number"
        },
        optional: false
      }]
    }
  }], ["DiffInfo", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 111
    },
    name: "DiffInfo",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 111
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 112
        },
        name: "added",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 112
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 113
        },
        name: "deleted",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 113
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 114
        },
        name: "lineDiffs",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 114
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 114
            },
            kind: "named",
            name: "LineDiff"
          }
        },
        optional: false
      }]
    }
  }], ["RevisionInfo", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 117
    },
    name: "RevisionInfo",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 117
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 118
        },
        name: "id",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 118
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 119
        },
        name: "hash",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 119
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 120
        },
        name: "title",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 120
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 121
        },
        name: "author",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 121
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 122
        },
        name: "date",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 122
          },
          kind: "named",
          name: "Date"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 123
        },
        name: "description",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 123
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 125
        },
        name: "bookmarks",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 125
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 125
            },
            kind: "string"
          }
        },
        optional: false
      }]
    }
  }], ["AsyncExecuteRet", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 128
    },
    name: "AsyncExecuteRet",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 128
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 129
        },
        name: "command",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 129
          },
          kind: "string"
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 130
        },
        name: "errorMessage",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 130
          },
          kind: "string"
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 131
        },
        name: "exitCode",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 131
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 132
        },
        name: "stderr",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 132
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 133
        },
        name: "stdout",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 133
          },
          kind: "string"
        },
        optional: false
      }]
    }
  }], ["RevisionFileCopy", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 136
    },
    name: "RevisionFileCopy",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 136
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 137
        },
        name: "from",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 137
          },
          kind: "named",
          name: "NuclideUri"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 138
        },
        name: "to",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 138
          },
          kind: "named",
          name: "NuclideUri"
        },
        optional: false
      }]
    }
  }], ["RevisionFileChanges", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 141
    },
    name: "RevisionFileChanges",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 141
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 142
        },
        name: "all",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 142
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 142
            },
            kind: "named",
            name: "NuclideUri"
          }
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 143
        },
        name: "added",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 143
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 143
            },
            kind: "named",
            name: "NuclideUri"
          }
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 144
        },
        name: "deleted",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 144
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 144
            },
            kind: "named",
            name: "NuclideUri"
          }
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 145
        },
        name: "copied",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 145
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 145
            },
            kind: "named",
            name: "RevisionFileCopy"
          }
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 146
        },
        name: "modified",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 146
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 146
            },
            kind: "named",
            name: "NuclideUri"
          }
        },
        optional: false
      }]
    }
  }], ["HgStatusCommandOptions", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 149
    },
    name: "HgStatusCommandOptions",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 149
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 150
        },
        name: "hgStatusOption",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 150
          },
          kind: "named",
          name: "HgStatusOptionValue"
        },
        optional: false
      }]
    }
  }], ["VcsLogEntry", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 153
    },
    name: "VcsLogEntry",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 153
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 154
        },
        name: "node",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 154
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 155
        },
        name: "user",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 155
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 156
        },
        name: "desc",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 156
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 157
        },
        name: "date",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 157
          },
          kind: "tuple",
          types: [{
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 157
            },
            kind: "number"
          }, {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 157
            },
            kind: "number"
          }]
        },
        optional: false
      }]
    }
  }], ["VcsLogResponse", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 160
    },
    name: "VcsLogResponse",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 160
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 161
        },
        name: "entries",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 161
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 161
            },
            kind: "named",
            name: "VcsLogEntry"
          }
        },
        optional: false
      }]
    }
  }], ["MergeConflict", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 164
    },
    name: "MergeConflict",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 164
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 165
        },
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 165
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 166
        },
        name: "message",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 166
          },
          kind: "named",
          name: "MergeConflictStatusValue"
        },
        optional: false
      }]
    }
  }], ["CheckoutSideName", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 169
    },
    name: "CheckoutSideName",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 169
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 169
        },
        kind: "string-literal",
        value: "ours"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 169
        },
        kind: "string-literal",
        value: "theirs"
      }]
    }
  }], ["AmendModeValue", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 171
    },
    name: "AmendModeValue",
    definition: {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 171
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 171
        },
        kind: "string-literal",
        value: "Clean"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 171
        },
        kind: "string-literal",
        value: "Rebase"
      }, {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 171
        },
        kind: "string-literal",
        value: "Fixup"
      }]
    }
  }], ["HgService", {
    kind: "interface",
    name: "HgService",
    location: {
      type: "source",
      fileName: "HgService.js",
      line: 198
    },
    constructorArgs: [{
      name: "workingDirectory",
      type: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 212
        },
        kind: "string"
      }
    }],
    staticMethods: new Map(),
    instanceMethods: new Map([["waitForWatchmanSubscriptions", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 229
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 229
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 229
          },
          kind: "void"
        }
      }
    }], ["dispose", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 233
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 233
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 233
          },
          kind: "void"
        }
      }
    }], ["fetchStatuses", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 262
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 263
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 263
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }, {
        name: "options",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 264
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 264
            },
            kind: "any"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 265
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 265
          },
          kind: "map",
          keyType: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 265
            },
            kind: "named",
            name: "NuclideUri"
          },
          valueType: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 265
            },
            kind: "named",
            name: "StatusCodeIdValue"
          }
        }
      }
    }], ["observeFilesDidChange", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 447
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 447
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 447
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 447
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    }], ["observeHgRepoStateDidChange", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 455
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 455
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 455
          },
          kind: "void"
        }
      }
    }], ["observeHgConflictStateDidChange", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 462
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 462
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 462
          },
          kind: "boolean"
        }
      }
    }], ["fetchDiffInfo", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 475
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 475
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 475
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 475
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 475
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 475
            },
            kind: "map",
            keyType: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 475
              },
              kind: "named",
              name: "NuclideUri"
            },
            valueType: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 475
              },
              kind: "named",
              name: "DiffInfo"
            }
          }
        }
      }
    }], ["createBookmark", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 507
      },
      kind: "function",
      argumentTypes: [{
        name: "name",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 507
          },
          kind: "string"
        }
      }, {
        name: "revision",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 507
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 507
            },
            kind: "string"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 507
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 507
          },
          kind: "void"
        }
      }
    }], ["deleteBookmark", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 517
      },
      kind: "function",
      argumentTypes: [{
        name: "name",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 517
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 517
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 517
          },
          kind: "void"
        }
      }
    }], ["renameBookmark", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 521
      },
      kind: "function",
      argumentTypes: [{
        name: "name",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 521
          },
          kind: "string"
        }
      }, {
        name: "nextName",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 521
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 521
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 521
          },
          kind: "void"
        }
      }
    }], ["fetchActiveBookmark", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 528
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 528
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 528
          },
          kind: "string"
        }
      }
    }], ["fetchBookmarks", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 535
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 535
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 535
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 535
            },
            kind: "named",
            name: "BookmarkInfo"
          }
        }
      }
    }], ["observeActiveBookmarkDidChange", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 555
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 555
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 555
          },
          kind: "void"
        }
      }
    }], ["observeBookmarksDidChange", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 562
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 562
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 562
          },
          kind: "void"
        }
      }
    }], ["fetchFileContentAtRevision", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 575
      },
      kind: "function",
      argumentTypes: [{
        name: "filePath",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 575
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "revision",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 575
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 575
            },
            kind: "string"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 575
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 575
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 575
            },
            kind: "string"
          }
        }
      }
    }], ["fetchFilesChangedAtRevision", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 579
      },
      kind: "function",
      argumentTypes: [{
        name: "revision",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 579
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 579
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 579
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 579
            },
            kind: "named",
            name: "RevisionFileChanges"
          }
        }
      }
    }], ["fetchRevisionInfoBetweenHeadAndBase", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 589
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 589
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 589
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 589
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "HgService.js",
                line: 589
              },
              kind: "named",
              name: "RevisionInfo"
            }
          }
        }
      }
    }], ["getBaseRevision", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 602
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 602
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 602
          },
          kind: "named",
          name: "RevisionInfo"
        }
      }
    }], ["getBlameAtHead", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 619
      },
      kind: "function",
      argumentTypes: [{
        name: "filePath",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 619
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 619
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 619
          },
          kind: "map",
          keyType: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 619
            },
            kind: "string"
          },
          valueType: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 619
            },
            kind: "string"
          }
        }
      }
    }], ["getConfigValueAsync", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 640
      },
      kind: "function",
      argumentTypes: [{
        name: "key",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 640
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 640
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 640
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 640
            },
            kind: "string"
          }
        }
      }
    }], ["getDifferentialRevisionForChangeSetId", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 661
      },
      kind: "function",
      argumentTypes: [{
        name: "changeSetId",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 661
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 661
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 661
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 661
            },
            kind: "string"
          }
        }
      }
    }], ["getSmartlog", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 684
      },
      kind: "function",
      argumentTypes: [{
        name: "ttyOutput",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 684
          },
          kind: "boolean"
        }
      }, {
        name: "concise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 684
          },
          kind: "boolean"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 684
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 684
          },
          kind: "named",
          name: "AsyncExecuteRet"
        }
      }
    }], ["commit", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 725
      },
      kind: "function",
      argumentTypes: [{
        name: "message",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 725
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 725
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 725
          },
          kind: "named",
          name: "ProcessMessage"
        }
      }
    }], ["amend", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 737
      },
      kind: "function",
      argumentTypes: [{
        name: "message",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 737
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 737
            },
            kind: "string"
          }
        }
      }, {
        name: "amendMode",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 737
          },
          kind: "named",
          name: "AmendModeValue"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 737
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 737
          },
          kind: "named",
          name: "ProcessMessage"
        }
      }
    }], ["revert", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 754
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 754
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 754
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 754
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 754
          },
          kind: "void"
        }
      }
    }], ["checkout", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 786
      },
      kind: "function",
      argumentTypes: [{
        name: "revision",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 786
          },
          kind: "string"
        }
      }, {
        name: "create",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 786
          },
          kind: "boolean"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 786
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 786
          },
          kind: "void"
        }
      }
    }], ["rename", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 806
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 807
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 807
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }, {
        name: "destPath",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 808
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "after",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 809
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 809
            },
            kind: "boolean"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 810
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 810
          },
          kind: "void"
        }
      }
    }], ["remove", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 833
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 833
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 833
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }, {
        name: "after",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 833
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 833
            },
            kind: "boolean"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 833
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 833
          },
          kind: "void"
        }
      }
    }], ["add", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 854
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 854
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 854
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 854
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 854
          },
          kind: "void"
        }
      }
    }], ["getTemplateCommitMessage", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 862
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 862
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 862
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 862
            },
            kind: "string"
          }
        }
      }
    }], ["getHeadCommitMessage", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 903
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 903
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 903
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 903
            },
            kind: "string"
          }
        }
      }
    }], ["log", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 923
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 923
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 923
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }, {
        name: "limit",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 923
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 923
            },
            kind: "number"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 923
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 923
          },
          kind: "named",
          name: "VcsLogResponse"
        }
      }
    }], ["fetchMergeConflicts", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 940
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 940
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 940
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 940
            },
            kind: "named",
            name: "MergeConflict"
          }
        }
      }
    }], ["resolveConflictedFile", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 985
      },
      kind: "function",
      argumentTypes: [{
        name: "filePath",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 985
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 985
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 985
          },
          kind: "void"
        }
      }
    }], ["continueRebase", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 989
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 989
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 989
          },
          kind: "void"
        }
      }
    }], ["abortRebase", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 993
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 993
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 993
          },
          kind: "void"
        }
      }
    }], ["copy", {
      location: {
        type: "source",
        fileName: "HgService.js",
        line: 1002
      },
      kind: "function",
      argumentTypes: [{
        name: "filePaths",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 1003
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 1003
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }, {
        name: "destPath",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 1004
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "after",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 1005
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "HgService.js",
              line: 1005
            },
            kind: "boolean"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "HgService.js",
          line: 1006
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "HgService.js",
            line: 1006
          },
          kind: "void"
        }
      }
    }]])
  }], ["ProcessMessage", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "process-rpc-types.js",
      line: 12
    },
    name: "ProcessMessage",
    definition: {
      location: {
        type: "source",
        fileName: "process-rpc-types.js",
        line: 12
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 12
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 13
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 13
            },
            kind: "string-literal",
            value: "stdout"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 14
          },
          name: "data",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 14
            },
            kind: "string"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 15
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 16
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 16
            },
            kind: "string-literal",
            value: "stderr"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 17
          },
          name: "data",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 17
            },
            kind: "string"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 18
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 19
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 19
            },
            kind: "string-literal",
            value: "exit"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 20
          },
          name: "exitCode",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 20
            },
            kind: "number"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 21
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 22
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 22
            },
            kind: "string-literal",
            value: "error"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 23
          },
          name: "error",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 23
            },
            kind: "named",
            name: "Object"
          },
          optional: false
        }]
      }],
      discriminantField: "kind"
    }
  }]])
});