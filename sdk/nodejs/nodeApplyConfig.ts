// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "./types";
import * as utilities from "./utilities";

/**
 * A node apply config resource
 */
export class NodeApplyConfig extends pulumi.CustomResource {
    /**
     * Get an existing NodeApplyConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NodeApplyConfig {
        return new NodeApplyConfig(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'talos:index:nodeApplyConfig';

    /**
     * Returns true if the given object is an instance of NodeApplyConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NodeApplyConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NodeApplyConfig.__pulumiType;
    }

    /**
     * node endpoint address
     */
    public readonly endpoint!: pulumi.Output<string>;
    /**
     * allow insecure connections
     */
    public readonly insecure!: pulumi.Output<boolean>;
    /**
     * machineconfig
     */
    public readonly machineConfig!: pulumi.Output<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * machine config apply mode
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * node address
     */
    public readonly node!: pulumi.Output<string>;
    /**
     * talosconfig
     */
    public readonly talosConfig!: pulumi.Output<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * wait timeout in seconds
     */
    public readonly timeout!: pulumi.Output<number>;

    /**
     * Create a NodeApplyConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NodeApplyConfigArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoint'");
            }
            if ((!args || args.machineConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineConfig'");
            }
            if ((!args || args.node === undefined) && !opts.urn) {
                throw new Error("Missing required property 'node'");
            }
            if ((!args || args.talosConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'talosConfig'");
            }
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["insecure"] = (args ? args.insecure : undefined) ?? false;
            resourceInputs["machineConfig"] = args ? args.machineConfig : undefined;
            resourceInputs["mode"] = (args ? args.mode : undefined) ?? "AUTO";
            resourceInputs["node"] = args ? args.node : undefined;
            resourceInputs["talosConfig"] = args ? args.talosConfig : undefined;
            resourceInputs["timeout"] = (args ? args.timeout : undefined) ?? 600;
        } else {
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["insecure"] = undefined /*out*/;
            resourceInputs["machineConfig"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["node"] = undefined /*out*/;
            resourceInputs["talosConfig"] = undefined /*out*/;
            resourceInputs["timeout"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["machineConfig", "talosConfig"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NodeApplyConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NodeApplyConfig resource.
 */
export interface NodeApplyConfigArgs {
    /**
     * node endpoint address
     */
    endpoint: pulumi.Input<string>;
    /**
     * whether to use insecure connection
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * machineconfig
     */
    machineConfig: pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * machine config apply mode (default auto)
     */
    mode?: pulumi.Input<enums.TalosMachineConfigApplyMode>;
    /**
     * node address
     */
    node: pulumi.Input<string>;
    /**
     * talosconfig
     */
    talosConfig: pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * timeout in seconds (default 600)
     */
    timeout?: pulumi.Input<number>;
}