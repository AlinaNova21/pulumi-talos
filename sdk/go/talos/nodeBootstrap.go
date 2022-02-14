// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package talos

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// A node bootstrap resource
type NodeBootstrap struct {
	pulumi.CustomResourceState

	// node endpoint address
	Endpoint pulumi.StringOutput `pulumi:"endpoint"`
	// node address
	Node pulumi.StringOutput `pulumi:"node"`
	// talosconfig
	Talosconfig pulumi.StringOutput `pulumi:"talosconfig"`
}

// NewNodeBootstrap registers a new resource with the given unique name, arguments, and options.
func NewNodeBootstrap(ctx *pulumi.Context,
	name string, args *NodeBootstrapArgs, opts ...pulumi.ResourceOption) (*NodeBootstrap, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Endpoint == nil {
		return nil, errors.New("invalid value for required argument 'Endpoint'")
	}
	if args.Node == nil {
		return nil, errors.New("invalid value for required argument 'Node'")
	}
	if args.Talosconfig == nil {
		return nil, errors.New("invalid value for required argument 'Talosconfig'")
	}
	var resource NodeBootstrap
	err := ctx.RegisterResource("talos:index:nodeBootstrap", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNodeBootstrap gets an existing NodeBootstrap resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNodeBootstrap(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NodeBootstrapState, opts ...pulumi.ResourceOption) (*NodeBootstrap, error) {
	var resource NodeBootstrap
	err := ctx.ReadResource("talos:index:nodeBootstrap", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NodeBootstrap resources.
type nodeBootstrapState struct {
}

type NodeBootstrapState struct {
}

func (NodeBootstrapState) ElementType() reflect.Type {
	return reflect.TypeOf((*nodeBootstrapState)(nil)).Elem()
}

type nodeBootstrapArgs struct {
	// node endpoint address
	Endpoint string `pulumi:"endpoint"`
	// node address
	Node string `pulumi:"node"`
	// talosconfig
	Talosconfig string `pulumi:"talosconfig"`
}

// The set of arguments for constructing a NodeBootstrap resource.
type NodeBootstrapArgs struct {
	// node endpoint address
	Endpoint pulumi.StringInput
	// node address
	Node pulumi.StringInput
	// talosconfig
	Talosconfig pulumi.StringInput
}

func (NodeBootstrapArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*nodeBootstrapArgs)(nil)).Elem()
}

type NodeBootstrapInput interface {
	pulumi.Input

	ToNodeBootstrapOutput() NodeBootstrapOutput
	ToNodeBootstrapOutputWithContext(ctx context.Context) NodeBootstrapOutput
}

func (*NodeBootstrap) ElementType() reflect.Type {
	return reflect.TypeOf((**NodeBootstrap)(nil)).Elem()
}

func (i *NodeBootstrap) ToNodeBootstrapOutput() NodeBootstrapOutput {
	return i.ToNodeBootstrapOutputWithContext(context.Background())
}

func (i *NodeBootstrap) ToNodeBootstrapOutputWithContext(ctx context.Context) NodeBootstrapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NodeBootstrapOutput)
}

// NodeBootstrapArrayInput is an input type that accepts NodeBootstrapArray and NodeBootstrapArrayOutput values.
// You can construct a concrete instance of `NodeBootstrapArrayInput` via:
//
//          NodeBootstrapArray{ NodeBootstrapArgs{...} }
type NodeBootstrapArrayInput interface {
	pulumi.Input

	ToNodeBootstrapArrayOutput() NodeBootstrapArrayOutput
	ToNodeBootstrapArrayOutputWithContext(context.Context) NodeBootstrapArrayOutput
}

type NodeBootstrapArray []NodeBootstrapInput

func (NodeBootstrapArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*NodeBootstrap)(nil)).Elem()
}

func (i NodeBootstrapArray) ToNodeBootstrapArrayOutput() NodeBootstrapArrayOutput {
	return i.ToNodeBootstrapArrayOutputWithContext(context.Background())
}

func (i NodeBootstrapArray) ToNodeBootstrapArrayOutputWithContext(ctx context.Context) NodeBootstrapArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NodeBootstrapArrayOutput)
}

// NodeBootstrapMapInput is an input type that accepts NodeBootstrapMap and NodeBootstrapMapOutput values.
// You can construct a concrete instance of `NodeBootstrapMapInput` via:
//
//          NodeBootstrapMap{ "key": NodeBootstrapArgs{...} }
type NodeBootstrapMapInput interface {
	pulumi.Input

	ToNodeBootstrapMapOutput() NodeBootstrapMapOutput
	ToNodeBootstrapMapOutputWithContext(context.Context) NodeBootstrapMapOutput
}

type NodeBootstrapMap map[string]NodeBootstrapInput

func (NodeBootstrapMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*NodeBootstrap)(nil)).Elem()
}

func (i NodeBootstrapMap) ToNodeBootstrapMapOutput() NodeBootstrapMapOutput {
	return i.ToNodeBootstrapMapOutputWithContext(context.Background())
}

func (i NodeBootstrapMap) ToNodeBootstrapMapOutputWithContext(ctx context.Context) NodeBootstrapMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NodeBootstrapMapOutput)
}

type NodeBootstrapOutput struct{ *pulumi.OutputState }

func (NodeBootstrapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**NodeBootstrap)(nil)).Elem()
}

func (o NodeBootstrapOutput) ToNodeBootstrapOutput() NodeBootstrapOutput {
	return o
}

func (o NodeBootstrapOutput) ToNodeBootstrapOutputWithContext(ctx context.Context) NodeBootstrapOutput {
	return o
}

type NodeBootstrapArrayOutput struct{ *pulumi.OutputState }

func (NodeBootstrapArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*NodeBootstrap)(nil)).Elem()
}

func (o NodeBootstrapArrayOutput) ToNodeBootstrapArrayOutput() NodeBootstrapArrayOutput {
	return o
}

func (o NodeBootstrapArrayOutput) ToNodeBootstrapArrayOutputWithContext(ctx context.Context) NodeBootstrapArrayOutput {
	return o
}

func (o NodeBootstrapArrayOutput) Index(i pulumi.IntInput) NodeBootstrapOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *NodeBootstrap {
		return vs[0].([]*NodeBootstrap)[vs[1].(int)]
	}).(NodeBootstrapOutput)
}

type NodeBootstrapMapOutput struct{ *pulumi.OutputState }

func (NodeBootstrapMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*NodeBootstrap)(nil)).Elem()
}

func (o NodeBootstrapMapOutput) ToNodeBootstrapMapOutput() NodeBootstrapMapOutput {
	return o
}

func (o NodeBootstrapMapOutput) ToNodeBootstrapMapOutputWithContext(ctx context.Context) NodeBootstrapMapOutput {
	return o
}

func (o NodeBootstrapMapOutput) MapIndex(k pulumi.StringInput) NodeBootstrapOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *NodeBootstrap {
		return vs[0].(map[string]*NodeBootstrap)[vs[1].(string)]
	}).(NodeBootstrapOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*NodeBootstrapInput)(nil)).Elem(), &NodeBootstrap{})
	pulumi.RegisterInputType(reflect.TypeOf((*NodeBootstrapArrayInput)(nil)).Elem(), NodeBootstrapArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*NodeBootstrapMapInput)(nil)).Elem(), NodeBootstrapMap{})
	pulumi.RegisterOutputType(NodeBootstrapOutput{})
	pulumi.RegisterOutputType(NodeBootstrapArrayOutput{})
	pulumi.RegisterOutputType(NodeBootstrapMapOutput{})
}
