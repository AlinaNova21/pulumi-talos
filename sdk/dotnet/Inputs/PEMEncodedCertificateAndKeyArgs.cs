// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Talos.Inputs
{

    /// <summary>
    /// Talos PEMEncodedCertificateAndKey type
    /// </summary>
    public sealed class PEMEncodedCertificateAndKeyArgs : Pulumi.ResourceArgs
    {
        [Input("Crt")]
        public Input<object>? Crt { get; set; }

        [Input("Key")]
        public Input<object>? Key { get; set; }

        public PEMEncodedCertificateAndKeyArgs()
        {
        }
    }
}