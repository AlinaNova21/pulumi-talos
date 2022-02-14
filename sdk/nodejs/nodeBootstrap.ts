// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * A node bootstrap resource
 */
export class NodeBootstrap extends pulumi.CustomResource {
    /**
     * Get an existing NodeBootstrap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NodeBootstrap {
        return new NodeBootstrap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'talos:index:nodeBootstrap';

    /**
     * Returns true if the given object is an instance of NodeBootstrap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NodeBootstrap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NodeBootstrap.__pulumiType;
    }

    /**
     * node endpoint address
     */
    public readonly endpoint!: pulumi.Output<string>;
    /**
     * node address
     */
    public readonly node!: pulumi.Output<string>;
    /**
     * talosconfig
     */
    public readonly talosconfig!: pulumi.Output<string>;

    /**
     * Create a NodeBootstrap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NodeBootstrapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoint'");
            }
            if ((!args || args.node === undefined) && !opts.urn) {
                throw new Error("Missing required property 'node'");
            }
            if ((!args || args.talosconfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'talosconfig'");
            }
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["node"] = args ? args.node : undefined;
            resourceInputs["talosconfig"] = args ? args.talosconfig : undefined;
        } else {
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["node"] = undefined /*out*/;
            resourceInputs["talosconfig"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NodeBootstrap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NodeBootstrap resource.
 */
export interface NodeBootstrapArgs {
    /**
     * node endpoint address
     */
    endpoint: pulumi.Input<string>;
    /**
     * node address
     */
    node: pulumi.Input<string>;
    /**
     * talosconfig
     */
    talosconfig: pulumi.Input<string>;
}