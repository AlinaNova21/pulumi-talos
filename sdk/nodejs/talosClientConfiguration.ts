// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Generate client configuration for a Talos cluster
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as talos from "@pulumi/talos";
 *
 * const machineSecrets = new talos.TalosMachineSecrets("machineSecrets", {});
 * const talosconfig = new talos.TalosClientConfiguration("talosconfig", {
 *     clusterName: "example-cluster",
 *     machineSecrets: machineSecrets.machineSecrets,
 *     endpoints: ["10.5.0.2"],
 * });
 * ```
 */
export class TalosClientConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing TalosClientConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TalosClientConfigurationState, opts?: pulumi.CustomResourceOptions): TalosClientConfiguration {
        return new TalosClientConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'talos:index/talosClientConfiguration:TalosClientConfiguration';

    /**
     * Returns true if the given object is an instance of TalosClientConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TalosClientConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TalosClientConfiguration.__pulumiType;
    }

    /**
     * The name of the cluster in the generated config
     */
    public readonly clusterName!: pulumi.Output<string>;
    /**
     * endpoints to set in the generated config
     */
    public readonly endpoints!: pulumi.Output<string[] | undefined>;
    /**
     * The machine secrets for the cluster
     */
    public readonly machineSecrets!: pulumi.Output<string>;
    /**
     * nodes to set in the generated config
     */
    public readonly nodes!: pulumi.Output<string[] | undefined>;
    /**
     * The generated talos config
     */
    public /*out*/ readonly talosConfig!: pulumi.Output<string>;

    /**
     * Create a TalosClientConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TalosClientConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TalosClientConfigurationArgs | TalosClientConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TalosClientConfigurationState | undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["endpoints"] = state ? state.endpoints : undefined;
            resourceInputs["machineSecrets"] = state ? state.machineSecrets : undefined;
            resourceInputs["nodes"] = state ? state.nodes : undefined;
            resourceInputs["talosConfig"] = state ? state.talosConfig : undefined;
        } else {
            const args = argsOrState as TalosClientConfigurationArgs | undefined;
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.machineSecrets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineSecrets'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["endpoints"] = args ? args.endpoints : undefined;
            resourceInputs["machineSecrets"] = args ? args.machineSecrets : undefined;
            resourceInputs["nodes"] = args ? args.nodes : undefined;
            resourceInputs["talosConfig"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["talosConfig"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(TalosClientConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TalosClientConfiguration resources.
 */
export interface TalosClientConfigurationState {
    /**
     * The name of the cluster in the generated config
     */
    clusterName?: pulumi.Input<string>;
    /**
     * endpoints to set in the generated config
     */
    endpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The machine secrets for the cluster
     */
    machineSecrets?: pulumi.Input<string>;
    /**
     * nodes to set in the generated config
     */
    nodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The generated talos config
     */
    talosConfig?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TalosClientConfiguration resource.
 */
export interface TalosClientConfigurationArgs {
    /**
     * The name of the cluster in the generated config
     */
    clusterName: pulumi.Input<string>;
    /**
     * endpoints to set in the generated config
     */
    endpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The machine secrets for the cluster
     */
    machineSecrets: pulumi.Input<string>;
    /**
     * nodes to set in the generated config
     */
    nodes?: pulumi.Input<pulumi.Input<string>[]>;
}
